import React from 'react';
//import "./ProfileUser.css";
import Navbar from '../../../components/user-navbar/UserNav';
import ProfileCard from '../../../components/profile-card/ProfileCard';
import GameSlider from '../../../components/game-slider/GameSlider';

import EmptyImg from "../../../assets/empty.png";

const ProfileUser = () => {
    const playing = false;
    const saved = true;
    const bought = false;

    return (
        <div className='profile-user' >
            <Navbar />
            <section>
                <ProfileCard />
            </section>
            <main>
                <div className="slider-head" >
                    Currently Playing
                </div>
                {
                    playing
                        ? <GameSlider />
                        : <div className='outer-box' >
                            <div className='inner-box'>
                                <img src={EmptyImg} alt="add - games" />
                            </div>
                            <div className='game-names' >
                                Add a Game
                            </div>
                        </div>
                }


                <div className="slider-head" >
                    Saved Games
                </div>
                {
                    saved
                        ? <GameSlider />
                        : <div className='outer-box' >
                            <div className='inner-box'>
                                <img src={EmptyImg} alt="add - games" />
                            </div>
                            <div className='game-names' >
                                Add a Game
                            </div>
                        </div>
                }
                <div className="slider-head" >
                    Games Owned
                </div>
                {
                    bought
                        ? <GameSlider />
                        : <div className='outer-box' >
                            <div className='inner-box'>
                                <img src={EmptyImg} alt="add - games" />
                            </div>
                            <div className='game-names' >
                                Add a Game
                            </div>
                        </div>
                }
            </main>
        </div>
    )
}

export default ProfileUser