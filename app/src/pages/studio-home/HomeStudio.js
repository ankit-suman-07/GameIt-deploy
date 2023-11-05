import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./HomeStudio.css";

//import { UserContext } from '../../context/UserContext';

import StudioGamesCard from './studio-games/StudioGamesCard';
import StudioNav from '../../components/studio-navbar/StudioNav';

//import Logo from "../../assets/logo.png";
import GameLogo from "../../assets/game-logo.png";

const HomeStudio = () => {

    const [games, setGames] = useState(null);
    //const { user, updateUser } = useContext(UserContext);

    useEffect(() => {
        //setLoading(true);
        axios
            .get('https://server-gameit.onrender.com/games')
            .then((response) => {
                setGames(response.data.data);
                //setLoading(false);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
                //setLoading(false);
            });
    }, []);

    return (
        <div className='homestudio-outer' >
            <StudioNav />
            {/* <nav>
                <div className='studiohome-logo' >
                    <img src={Logo} alt='website_logo' />
                    <div className='studiohome-name' >
                        GAMEIT
                    </div>
                </div>
                <div className='studio-welcome' >
                    Welcome, <span>Studio name</span>
                </div>
            </nav> */}
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
                            23
                        </div>
                    </div>
                    <div className='studio-grid-item' >
                        <div className='studio-grid-head' >
                            Games Sold
                        </div>
                        <div className='studio-grid-content' >
                            43500
                        </div>
                    </div>
                    <div className='studio-grid-item' >
                        <div className='studio-grid-head' >
                            Total Reviews
                        </div>
                        <div className='studio-grid-content' >
                            12
                        </div>
                    </div>
                    <div className='studio-grid-item' >
                        <div className='studio-grid-head' >
                            <Link to={'/games/create'}>
                                Add a Game
                            </Link>
                        </div>
                        <div className='studio-grid-content' >

                        </div>
                    </div>
                    <div className='studio-grid-item' >
                        <div className='studio-grid-head' >
                            Community Warnings
                        </div>
                        <div className='studio-grid-content' >
                            0
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
                                <div key={idx} >
                                    <Link to={`/games/details/${game._id}`}>
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

                    {/* <StudioGamesCard />
                    <StudioGamesCard />
                    <StudioGamesCard />
                    <StudioGamesCard />
                    <StudioGamesCard />
                    <StudioGamesCard />
                    <StudioGamesCard />
                    <StudioGamesCard />
                    <StudioGamesCard /> */}
                </div>
            </main>
        </div>
    )
}

export default HomeStudio