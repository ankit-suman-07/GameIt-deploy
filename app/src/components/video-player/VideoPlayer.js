import React, { useRef, useState } from 'react';
import "./VideoPlayer.css";

const VideoPlayer = ({ low, mid, high }) => {

    const [playURL, setPlayURL] = useState(high);

    const playLow = () => {
        setPlayURL(low);
    }

    const playMid = () => {
        setPlayURL(mid);
    }

    const playHigh = () => {
        setPlayURL(high);
    }

    const videoRef = useRef();

    const handleForwardButton = () => {
        videoRef.current.currentTime += 2;
    }

    const handleBackwardButton = () => {
        videoRef.current.currentTime -= 2;
    }

    return (
        <div className='videoplayer-outer' >
            <video ref={videoRef} preload='auto' controls autoPlay>
                <source src={playURL} type='video/mp4'></source>
            </video>
            <div className='videoplayer-controls' >
                <div className='videoplayer-btn' >
                    <button onClick={handleForwardButton}>+10s</button><br />
                    <button onClick={handleBackwardButton}>-10s</button><br />
                </div>
                <div className='videoplayer-quality' >
                    <button onClick={playLow} >Low</button>
                    <button onClick={playMid} >Mid</button>
                    <button onClick={playHigh} >High</button>

                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;