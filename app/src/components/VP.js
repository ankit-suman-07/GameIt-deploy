import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-contrib-quality-levels';

const VideoPlayers = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const player = videojs(videoRef.current, {
            techOrder: ['html5', 'flash'], // Specify preferred tech order
            sources: [
                {
                    src: 'http://res.cloudinary.com/dczpi1rh4/video/upload/v1698870386/jteyknzewggijxurjnv0.mp4',
                    type: 'video/mp4',
                },
            ],
        });

        player.qualityLevels(); // Enable quality levels plugin

        return () => {
            //player.dispose(); // Clean up the player when the component is unmounted
        };
    }, []); // Empty dependency array ensures this effect runs once after initial render

    return (
        <div>
            <h1>Video.js Player with Resolution Selector</h1>
            <video
                ref={videoRef}
                className="video-js vjs-default-skin"
                controls
            />
        </div>
    );
};

export default VideoPlayers;
