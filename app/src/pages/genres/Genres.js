import React from 'react';
import "./Genres.css";

import GenreCard from '../../components/genre-card/GenreCard';
import Navbar from '../../components/user-navbar/UserNav';

import Action from "../../assets/action.jpg";
import ActionAdventure from "../../assets/action-adv.jpg";
import Adventure from "../../assets/adventure.jpg";
import Casual from "../../assets/casual.jpg";
import Fighting from "../../assets/fighting.jpg";
import Horror from "../../assets/horror.jpg";
import Platformer from "../../assets/platformer.png";
import Racing from "../../assets/racing.jpg";
import Shooter from "../../assets/shooter.jpg";
import Simulator from "../../assets/simulator.jpg";
import Sports from "../../assets/sports.jpeg";
import Strategy from "../../assets/strategy.jpg";
import SuperHero from "../../assets/superhero.jpg";
import RPG from "../../assets/rpg.jpg";


const Genres = () => {
    const genres = [
        Action, RPG, ActionAdventure, Adventure, SuperHero,
        Casual, Fighting, Horror, Platformer, Racing,
        Shooter, Simulator, Sports, Strategy
    ];

    const genre_tags = [
        "Action", "RPG", "ActionAdventure", "Adventure", "SuperHero",
        "Casual", "Fighting", "Horror", "Platformer", "Racing",
        "Shooter", "Simulator", "Sports", "Strategy"

    ];

    return (
        <div className='genres' >
            <Navbar />

            <main className='genre-main' >
                {
                    genres.map((image, idx) => {
                        return (
                            <div key={idx} >
                                <GenreCard image={image} tag={genre_tags[idx]} />
                            </div>

                        );
                    })
                }
            </main>
        </div>
    )
}

export default Genres;