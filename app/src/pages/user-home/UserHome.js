import React, { useContext, useEffect, useState } from 'react';
import "./UserHome.css";
import axios from 'axios';
import UserNav from "../../components/user-navbar/UserNav";
import ImageSlider from '../../components/image-slider/ImageSlider';
import GameSlider from '../../components/game-slider/GameSlider';
import PassPlans from '../../components/pass-plans/PassPlans';

import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const UserHome = () => {
    const { user, setGamesList, gamesList, setAllGenres } = useContext(UserContext);
    const [gameGenres, setGameGenres] = useState({}); // State to store games based on genres
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!user.email) {
                    navigate('/');
                }
                const response = await axios.get('http://localhost:5000/games');
                setGamesList(response.data.data);

                // Create an object to store games based on genres
                const genres = response.data.data.reduce((acc, game) => {
                    game.genre.forEach((genre) => {
                        if (!acc[genre]) {
                            acc[genre] = [];
                        }
                        acc[genre].push(game);
                    });
                    return acc;
                }, {});
                setGameGenres(genres);
                setAllGenres(genres);
                console.log("Gere from -> ", genres)
            } catch (error) {
                console.log(error);
            }
        };

        fetchData(); // Call the async function inside useEffect
    }, [user, navigate]);

    return (
        <div className='userhome-outer'>
            <UserNav />
            <section>
                <ImageSlider />
            </section>

            <main>
                <div className="slider-head">
                    Continue Playing
                </div>
                <GameSlider gamesList={gamesList} />

                {/* Render sliders for each genre */}
                {Object.keys(gameGenres).map((genre) => (
                    <div key={genre}>
                        <div className="slider-head">
                            {genre}
                        </div>
                        <GameSlider gamesList={gameGenres[genre]} />
                    </div>
                ))}

                <PassPlans />
            </main>
        </div>
    );
}

export default UserHome;
