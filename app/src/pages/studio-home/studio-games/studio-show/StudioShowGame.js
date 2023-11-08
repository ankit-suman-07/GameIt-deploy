import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../../context/UserContext';

import "./StudioShowGame.css";
import StudioNav from '../../../../components/studio-navbar/StudioNav';
import VideoPlayer from '../../../../components/video-player/VideoPlayer';

const StudioShowGame = () => {
    const [game, setGame] = useState(null); // Initialize game state as null
    const { id } = useParams();
    const { user } = useContext(UserContext);

    useEffect(() => {
        //setLoading(true);
        axios
            .get(`https://server-gameit.onrender.com/games/${id}`)
            .then((response) => {
                setGame(response.data);
                console.log(response.data);
                //setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                //setLoading(false);
            });
    }, [id]);

    if (!game) {
        return <div>Loading...</div>; // Display loading message while fetching data
    }



    return (
        <div className='studioshowgame-outer' >
            <StudioNav />
            <div className='studioshowgame-header' >
                {game.name}
            </div>
            <div className='studioshowgame-main' >
                <div className='studioshowgame-trailer' >
                    <VideoPlayer
                        low={game.trailer}
                        mid={game.trailer}
                        high={game.trailer}
                        thumbnail={game.thumbnail}
                        screenshots={game.screenshots}
                    />
                </div>

                <div className='studioshowgame-sreenshots-details' >
                    <div className='screenshots-header' >
                        Game Captures
                    </div>
                    <div className='studioshowgame-screenshots-img' >


                        {
                            game.screenshots && (game.screenshots).map((screenshot, idx) => {
                                return (
                                    <img src={screenshot} alt='screenshot' key={idx} />
                                );
                            })
                        }
                    </div>
                    <div className='description-header' >
                        Description
                    </div>
                    <div className='studioshowgame-description' >

                        {
                            game.summary

                        }

                    </div>
                </div>
            </div>
            <div className='studioshowgame-section' >
                <div className='studioshowgame-section-misc' >
                    <div className='studioshowgame-info' >
                        <span>Likes : {game.likes}</span>
                        <span>Year : {game.year}</span>
                        <span>Price : ${game.price}</span>
                        <span>Rating : {game.rating}</span>
                        {
                            !(user.usertype === "Gamer") && <Link to={`/games/edit/${game._id}`} className='edit-link' >
                                <span>Edit Game Details</span>
                            </Link>
                        }

                    </div>
                    <div className='studioshowgame-info-multiple' >
                        <div className='studioshowgame-box' >
                            <div className='studioshowgame-box-head' >
                                Genre
                            </div>
                            {
                                game.genre && (game.genre).map((item, idx) => {
                                    return (
                                        <span key={idx} >{item}</span>
                                    );
                                })
                            }
                        </div>
                        <div className='studioshowgame-box' >
                            <div className='studioshowgame-box-head' >
                                Tags
                            </div>
                            {
                                game.tags && (game.tags).map((item, idx) => {
                                    return (
                                        <span key={idx} >{item}</span>
                                    );
                                })
                            }
                        </div>
                        <div className='studioshowgame-box' >
                            <div className='studioshowgame-box-head' >
                                Consoles
                            </div>
                            {
                                game.consoleDevice && (game.consoleDevice).map((item, idx) => {
                                    return (
                                        <span key={idx} >{item}</span>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='studioshowgame-section-reviews' >
                    <div className='studioshowgame-section-reviews-header' >
                        User Reviews
                    </div>
                    {
                        game.reviews && Object.keys(game.reviews).map(reviewId => (
                            <div key={reviewId} className='studioshowgame-review' >
                                <div className='studioshowgame-review-id' >
                                    {reviewId}
                                </div>
                                {game.reviews[reviewId].map((comment, index) => (
                                    <div key={index} className='studioshowgame-review-text' >
                                        {comment}
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default StudioShowGame;