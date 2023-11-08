import { React, useState } from 'react';
import "./GameSlider.css";

import ArrowRightIcon from '../../assets/right.png';
import ArrowLeftIcon from '../../assets/left.png';

import Mario from "../../assets/Mario.jpg";
import GTA from "../../assets/GTA.jpg";
import SpiderMan from "../../assets/Spider Man.jpg";
import EldenRings from "../../assets/Elden Rings.jpg";
import GOW from "../../assets/God of War.jpg";
import AC from "../../assets/slider_4.png";
import Batman from "../../assets/Batman.jpg";
import Witcher from "../../assets/witcher_3.jpg";
import Skyrim from "../../assets/Skyrim.jpg";

const GameSlider = ({ gamesList }) => {
    const [margin, setMargin] = useState(0);

    const images = [
        Mario,
        GTA,
        SpiderMan,
        EldenRings,
        GOW,
        AC,
        Batman,
        Witcher,
        Skyrim
    ];

    const names = [
        "Mario", "Grand Theft Auto", "Spider Man", "Elden Rings",
        "God Of War", "Assassins Creed", "Batman: Arkham Knight", "Witcher 3", "Skyrim"
    ];

    const moveRight = () => {
        setMargin(margin - 40);
    }

    const moveLeft = () => {
        setMargin(margin + 40);
    }

    const sliderStyle = {
        marginLeft: margin + 'px' // marginLeft should be a string with 'px' unit
    };
    return (
        <div className='game-slider' >
            <button onClick={moveLeft} className={margin < 0 ? 'game-left-btn' : "game-hidden-btn"} >
                <img src={ArrowLeftIcon} alt='left arrow' />
            </button>
            <button onClick={moveRight} className='game-right-btn' >
                <img src={ArrowRightIcon} alt="right arrow" />
            </button>

            <div className='games-slider-box' style={sliderStyle} >

                {
                    gamesList.map((game, idx) => {
                        return (
                            <div className='outer-box' key={idx}>
                                <div className='inner-box' key={idx} >
                                    <img src={game.poster} alt={names[idx]} />
                                </div>
                                <div className='game-names' >
                                    {
                                        game.name
                                    }
                                </div>
                            </div>
                        );
                    })
                }


            </div>

        </div >
    )
}

export default GameSlider