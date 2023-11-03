import React, { useState } from 'react';
import axios from 'axios';
import { Cloudinary } from 'cloudinary-core';
import VideoPlayer from '../video-player/VideoPlayer';

const cloudinary = new Cloudinary({ cloud_name: 'dczpi1rh4' });

const VideoUploader = () => {
    const [video, setVideo] = useState(null);
    const [low, setLow] = useState("");
    const [mid, setMid] = useState("");
    const [high, setHigh] = useState("");


    const handleVideoChange = (event) => {
        const file = event.target.files[0];
        setVideo(file);
    };

    const modifyURL = (url) => {
        let regex = /image/g; // Using regular expression with 'g' flag for global replacement
        let replacementString = "video";

        let modifiedString = url.replace(regex, replacementString);
        return modifiedString + ".mp4";
    }

    const uploadVideo = async () => {
        const formData = new FormData();
        formData.append('file', video);
        formData.append("upload_preset", "v3xhumy9");

        try {
            // Upload the original video to Cloudinary
            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/dczpi1rh4/video/upload',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },

                }
            );

            // Get public ID and secure URL of the uploaded video
            const publicId = response.data.public_id;
            const secureUrl = response.data.secure_url;

            // Generate and save video URLs for different resolutions
            const videoUrls = {
                original: secureUrl,
                '360p': cloudinary.url(publicId, { width: 640, height: 360, crop: 'scale' }),
                '480p': cloudinary.url(publicId, { width: 854, height: 480, crop: 'scale' }),
                '720p': cloudinary.url(publicId, { width: 1280, height: 720, crop: 'scale' }),
            };

            console.log('Video URLs:', videoUrls);
            console.log('Video  360p : ', modifyURL(videoUrls['360p']));
            console.log('Video  480p : ', modifyURL(videoUrls['480p']));
            console.log('Video  720p : ', modifyURL(videoUrls['720p']));
            setLow(modifyURL(videoUrls['360p']));
            setMid(modifyURL(videoUrls['480p']));
            setHigh(modifyURL(videoUrls['720p']));

            // You can now save these URLs to your database or perform any other necessary actions
        } catch (error) {
            console.error('Error uploading video:', error);
        }
    };



    return (
        <div>
            <h1>Cloudinary Video Uploader</h1>
            <input type="file" accept="video/*" onChange={handleVideoChange} />
            <button onClick={uploadVideo}>Upload Video in multiple resolution</button>
            <h1>Cloudinary Video Uploader</h1>
            <h3>======================================</h3>
            <VideoPlayer low={low} mid={mid} high={high} />
            <h3>======================================</h3>
        </div>
    );
};

export default VideoUploader;
