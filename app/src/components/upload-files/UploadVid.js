import React, { useState } from 'react';
import axios from 'axios';
import "./UploadVid.css";

const UploadVid = ({ setTrailer }) => {

    const [video, setVideoSelected] = useState([]);
    //const [vidUrl, setVidUrl] = useState("");
    const [perc, setPerc] = useState("");

    const uploadVideo = () => {
        const formData = new FormData();
        formData.append("file", video[0]);
        formData.append("upload_preset", "vbzwa1gu");
        axios.post("https://api.cloudinary.com/v1_1/dczpi1rh4/video/upload", formData, {
            onUploadProgress: (progressEvent) => {
                const percentage = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                console.log(`Upload Progress: ${percentage}%`);
                setPerc(percentage);
            }
        })
            .then((response) => {
                console.log(response);
                console.log(response.data.url);
                //setVidUrl(response.data.url);
                setTrailer(response.data.url);
            })
            .catch((error) => {
                console.error("Error uploading video: ", error);
            });
    }
    return (
        <div className='uploadvideo-outer' >

                <input
                    type='file'
                    onChange={(event) => {
                        setVideoSelected(event.target.files)
                    }} />
            <button onClick={uploadVideo} >Upload
                {
                    (perc > 0 && perc < 100) && (" " + perc + "%")
                }
            </button>

        </div>
    )
}

export default UploadVid