import React from 'react';
import "./StudioGamesCard.css";


const StudioGamesCard = ({ poster, alt, title }) => {
    return (
        <div className='studiogamescard-outer' >
            <div className='studio-games-poster' >
                <img src={poster} alt={alt} />
            </div>
            <div className='studio-games-title' >
                {title}
            </div>
        </div>
    )
}

export default StudioGamesCard