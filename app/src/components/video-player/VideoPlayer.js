import React, { useRef, useState } from 'react';

const VideoPlayer = () => {

    const [videoVolume, setVideoVolume] = useState(100);
    const [vidDuration, setVidDuration] = useState(0);
    const [currentDuration, setCurrentDuration] = useState(0);

    const videoRef = useRef();

    const getVideoDuration = () => {

        const videoIntervalTime = setInterval(() => {

            setCurrentDuration(parseFloat(videoRef.current.currentTime));

            if (parseFloat(videoRef.current.currentTime) >= vidDuration) {

                clearVideoInterval();
            }

        }, 1000)



        const clearVideoInterval = () => {
            clearInterval(videoIntervalTime);
        }

    }

    const handleVolume = (e) => {

        const valumValue = parseFloat(e.target.value) / 100;

        setVideoVolume(e.target.value);

        videoRef.current.volume = valumValue.toFixed(1);

    }

    const handlePlayButton = () => {
        videoRef.current.play();
        setVidDuration(videoRef.current.duration);
        getVideoDuration();

    }

    const handleStopButton = () => {

        videoRef.current.pause();
    }

    const handleReplayButton = () => {
        setVidDuration(videoRef.current.duration);
        videoRef.current.currentTime = 0;
        videoRef.current.play();

        getVideoDuration();
    }

    const handleForwardButton = () => {
        videoRef.current.currentTime += 2;
    }

    const handleBackwardButton = () => {
        videoRef.current.currentTime -= 2;
    }

    const handleMuteButton = () => {

        videoRef.current.muted = true;
    }

    const handleUnMuteButton = () => {

        videoRef.current.muted = false;
    }

    const setVideoSpeed = (e) => {

        videoRef.current.playbackRate = parseFloat(e.target.value);
    }

    const videoDuration = (e) => {

        setCurrentDuration(parseFloat(e.target.value));
        videoRef.current.currentTime = parseFloat(e.target.value);
    }



    return (
        <> <h1 style={{ textAlign: 'center' }}>The Customize video controls attribute</h1>
            <div className='customVideoTagClass'>

                <video ref={videoRef} preload='auto'>
                    <source src='https://www.w3schools.com/html/mov_bbb.mp4' type='video/mp4'></source>
                </video>
            </div>
            <div className='customVideoTagControlsClass'>
                <button onClick={handlePlayButton}>Play</button>
                <label>playback speed</label>
                <select onChange={setVideoSpeed}>
                    <option value={0.5}>0.5x</option>
                    <option value={1.0}>1.0x</option>
                    <option value={1.5}>1.5x</option>
                    <option value={2.0}>2.0x</option>
                </select><br />
                <button onClick={handleStopButton} >Stop</button><br />
                <button onClick={handleReplayButton}>Repaly</button><br />
                <button onClick={handleMuteButton}>Mute</button><br />
                <button onClick={handleUnMuteButton}>Unmute</button><br />
                <button onClick={handleForwardButton}>+10s</button><br />
                <button onClick={handleBackwardButton}>-10s</button><br />
                <label><b>volume</b></label><input type='range' min="0" max="100" step='10' value={videoVolume} onChange={handleVolume} /><br /><br />
                <label><b>Scrubbing Video</b></label><input type='range' min="0" max={vidDuration} value={currentDuration} onChange={videoDuration} />
            </div>
        </>
    );
}

export default VideoPlayer;