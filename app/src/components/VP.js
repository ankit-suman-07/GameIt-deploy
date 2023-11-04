// import React, { useRef, useEffect, useState } from 'react';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';
// import 'videojs-contrib-quality-levels';

// const VideoPlayers = ({ low, mid, high }) => {
//     const videoRef = useRef(null);

//     const [playURL, setPlayURL] = useState(high);

//     const playLow = () => {
//         setPlayURL(low);
//     }

//     const playMid = () => {
//         setPlayURL(mid);
//     }

//     const playHigh = () => {
//         setPlayURL(high);
//     }



//     useEffect(() => {
//         const player = videojs(videoRef.current, {
//             techOrder: ['html5'], // Specify preferred tech order
//             sources: [
//                 {
//                     //src: 'http://res.cloudinary.com/dczpi1rh4/video/upload/v1698870386/jteyknzewggijxurjnv0.mp4',
//                     src: playURL,
//                     type: 'video/mp4',
//                 },
//             ],
//         });

//         console.log(playURL);

//         //player.qualityLevels(); // Enable quality levels plugin

//         return () => {
//             // if (player) {
//             //     player.dispose();
//             // }
//         };
//     }, []); // Empty dependency array ensures this effect runs once after initial render

//     return (
//         <div>
//             <h1>Video.js Player with Resolution Selector</h1>
//             <video
//                 ref={videoRef}
//                 className="video-js vjs-default-skin"
//                 controls
//             />
//             <div>
//                 <button onClick={playLow} >Low</button>
//                 <button onClick={playMid} >Mid</button>
//                 <button onClick={playHigh} >High</button>

//             </div>
//         </div>
//     );
// };

// export default VideoPlayers;

import React, { useRef } from 'react';
import VideoPlayer from 'react-video-js-player';

const VideoApp = ({ low, mid, high, thumbnail }) => {
    const playerRef = useRef(null);

    const video = {
        src: high,
        poster: thumbnail
    };

    const onPlayerReady = (player) => {
        playerRef.current = player;
    };

    return (
        <div>
            <VideoPlayer
                controls={true}
                src={video.src}
                poster={video.poster}
                width="720"
                height="420"
                onReady={onPlayerReady}
            />
        </div>
    );
};

export default VideoApp;

