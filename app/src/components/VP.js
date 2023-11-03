import React, { useRef, useEffect, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-contrib-quality-levels';

const VideoPlayers = ({ low, mid, high }) => {
    const videoRef = useRef(null);

    const [playURL, setPlayURL] = useState("");

    const playLow = () => {
        setPlayURL(low);
    }

    const playMid = () => {
        setPlayURL(mid);
    }

    const playHigh = () => {
        setPlayURL(high);
    }



    useEffect(() => {
        const player = videojs(videoRef.current, {
            techOrder: ['html5'], // Specify preferred tech order
            sources: [
                {
                    //src: 'http://res.cloudinary.com/dczpi1rh4/video/upload/v1698870386/jteyknzewggijxurjnv0.mp4',
                    src: playURL,
                    type: 'video/mp4',
                },
            ],
        });

        player.qualityLevels(); // Enable quality levels plugin

        return () => {
            if (player) {
                player.dispose();
            }
        };
    }, [playURL]); // Empty dependency array ensures this effect runs once after initial render

    return (
        <div>
            <h1>Video.js Player with Resolution Selector</h1>
            <video
                ref={videoRef}
                className="video-js vjs-default-skin"
                controls
            />
            <div>
                <button onClick={playLow} >Low</button>
                <button onClick={playMid} >Mid</button>
                <button onClick={playHigh} >High</button>

            </div>
        </div>
    );
};

export default VideoPlayers;
