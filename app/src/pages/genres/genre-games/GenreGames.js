import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import StudioGamesCard from '../../studio-home/studio-games/StudioGamesCard';
import { UserContext } from '../../../context/UserContext';
import Navbar from '../../../components/user-navbar/UserNav';
import "./GenreGames.css";

const GenreGames = () => {
    const { user, allGenres, genreGamePage } = useContext(UserContext);

    const navigate = useNavigate();


    const games = allGenres[genreGamePage];


    useEffect(() => {
        if (!user.email) {
            console.log(games)
            navigate('/');
        }
    }, []);
    return (
        <div>
            <Navbar />
            <div className='genrepage-header' >
                {genreGamePage + " Games"}
            </div>
            <div className='studio-games' >


                {
                    games && games.map((game, idx) => {
                        return (


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
        </div>
    )
}

export default GenreGames