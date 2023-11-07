import React, { useState } from 'react';
import axios from 'axios';
import "./Upload.css";

const Upload = ({ setImage }) => {

    const [imageSelected, setImageSelected] = useState([]);
    //const [imgUrl, setImgUrl] = useState("");

    const uploadImage = () => {
        const formData = new FormData();
        formData.append("file", imageSelected[0]);
        formData.append("upload_preset", "vbzwa1gu");
        axios.post("https://api.cloudinary.com/v1_1/dczpi1rh4/image/upload", formData)
            .then((response) => {
                console.log(response);
                console.log(response.data.url);
                //setImgUrl(response.data.url);
                setImage(response.data.url);
            })
    }


    return (
        <div className='upload-outer' >
                <input
                    type='file'
                    onChange={(event) => {
                        setImageSelected(event.target.files)
                    }} />
            <button onClick={uploadImage} >Upload</button>
        </div>

    )
}

export default Upload