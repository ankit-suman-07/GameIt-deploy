import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./HomeStudio.css";

//import { UserContext } from '../../context/UserContext';

import StudioGamesCard from './studio-games/StudioGamesCard';
import StudioNav from '../../components/studio-navbar/StudioNav';

//import Logo from "../../assets/logo.png";
import GameLogo from "../../assets/game-logo.png";
import { UserContext } from '../../context/UserContext';

const HomeStudio = () => {

    const [games, setGames] = useState(null);
    const [gamesAdded, setGamesAdded] = useState(0);
    const [gamesSold, setGamesSold] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
    const [totalWarnings, setTotalWarning] = useState(0);
    const { user } = useContext(UserContext);


    const calcReviewsCount = (reviews) => {
        const reviewsArrays = Object.values(reviews);
        const allReviews = reviewsArrays.flat();
        console.log(allReviews.length);
        return allReviews.length;
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (!user.email) {
            navigate('/');
        }
        axios
            .get('http://localhost:5000/games')
            .then((response) => {
                setGames(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (games) {
            let reviewsCount = 0;
            let gamesCount = 0;
            let soldCount = 0;
            games.forEach((game) => {
                if (game.company === user.name) {
                    gamesCount += 1;
                    soldCount += game.sold;
                    reviewsCount += calcReviewsCount(game.reviews);
                }
                setGamesAdded(gamesCount);
                setGamesSold(soldCount);
                setTotalReviews(reviewsCount);
            });
        }
    }, [games, user]);

    return (
        <div className='homestudio-outer' >
            <StudioNav />

            <main>
                <div className='studio-grids' >
                    <div className='studio-logo' >
                        <img src={GameLogo} alt='game-studio-logo' />
                    </div>
                    <div className='studio-grid-item' >
                        <div className='studio-grid-head' >
                            Games Added
                        </div>
                        <div className='studio-grid-content' >
                            {gamesAdded}
                        </div>
                    </div>
                    <div className='studio-grid-item' >
                        <div className='studio-grid-head' >
                            Games Sold
                        </div>
                        <div className='studio-grid-content' >
                            {gamesSold}
                        </div>
                    </div>
                    <div className='studio-grid-item' >
                        <div className='studio-grid-head' >
                            Total Reviews
                        </div>
                        <div className='studio-grid-content' >
                            {totalReviews}
                        </div>
                    </div>
                    <div className='studio-grid-item add-btn' >
                        <div className='studio-grid-head' >
                            <Link to={'/games/create'} className='link-text' >
                                Add a Game
                            </Link>
                        </div>

                    </div>
                    <div className='studio-grid-item' >
                        <div className='studio-grid-head' >
                            Community Warnings
                        </div>
                        <div className='studio-grid-content' >
                            {user.warnings && (user.warnings).length}
                        </div>
                    </div>

                </div>

                <div className='studio-games-header' >
                    Games Added
                </div>

                <div className='studio-games' >
                    {
                        games && games.map((game, idx) => {
                            return (

                                (user.name === game.company)
                                &&
                                <div key={idx} >
                                    <Link to={`/games/details/${game._id}`} as="div" className="custom-link" >

                                        <StudioGamesCard
                                            poster={game.poster}
                                            alt={game.name + " poster"}
                                            title={game.name}
                                        />
                                    </Link>

                                </div>


                            );
                        })
                    }


                </div>
            </main>
        </div>
    )
}

export default HomeStudio