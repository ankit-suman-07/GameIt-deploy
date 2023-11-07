import React from 'react';
import { Link } from 'react-router-dom';
import "./GenreCard.css";

const GenreCard = ({ image, tag }) => {
    return (
        <Link to="/gamesgrid">
            <div className='genre-card' >
                <img src={image} alt={tag + " image"} />
                <div className='genre-card-tag' >
                    <span>{tag}</span>
                </div>
            </div>
        </Link>
    )
}

export default GenreCard