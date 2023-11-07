import { React, useState } from 'react';
import "./UserHome.css";
import UserNav from "../../components/user-navbar/UserNav";
import ImageSlider from '../../components/image-slider/ImageSlider';
import GameSlider from '../../components/game-slider/GameSlider';
import PassPlans from '../../components/pass-plans/PassPlans';

const UserHome = () => {
    return (
        <div className='userhome-outer' >
            <UserNav />
            <section>
                <ImageSlider />
            </section>

            <main>
                <div className="slider-head" >
                    Continue Playing
                </div>
                <GameSlider />
                <div className="slider-head" >
                    Role-Playing Games
                </div>
                <GameSlider />
                <div className="slider-head" >
                    Action-Adventure Games
                </div>
                <GameSlider />

                <PassPlans />
            </main>
        </div>
    )
}

export default UserHome