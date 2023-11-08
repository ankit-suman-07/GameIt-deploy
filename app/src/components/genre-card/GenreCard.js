import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "./GenreCard.css";
import { UserContext } from '../../context/UserContext';

const GenreCard = ({ image, tag }) => {
    const { setGenreGamePage } = useContext(UserContext);
    const navigate = useNavigate();

    const handleGenreClick = () => {
        setGenreGamePage(tag); // Update the genreGamePage context with the selected genre tag
        navigate('/genre/games', { state: { tag } }); // Pass the tag as state to the destination component
    };

    return (
        <div className='genre-card' onClick={handleGenreClick}>
            <img src={image} alt={tag + " image"} />
            <div className='genre-card-tag'>
                <span>{tag}</span>
            </div>
        </div>
    );
};

export default GenreCard;
