import React, { useState } from 'react';
import axios from 'axios';

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
        <div>
            <div>
                <input
                    type='file'
                    onChange={(event) => {
                        setVideoSelected(event.target.files)
                    }} />
                <button onClick={uploadVideo} >Upload Video</button>
            </div>
            <div>
                {perc + "%"}
            </div>
            <div>

            </div>
        </div>
    )
}

export default UploadVid