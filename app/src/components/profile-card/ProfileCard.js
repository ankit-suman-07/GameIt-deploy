import React from 'react';
import "./ProfileCard.css";

import ProfileIcon from "../../assets/empty.png";

const profileCard = () => {
    return (
        <div className='profile-card' >
            <div className='profile-user-img' >
                <img src={ProfileIcon} alt='user-profile' />
            </div>
            <div className='profile-user-data' >
                <div className='user-name' >USERNAME</div>
                <div className='user-email' >usermail@gmail.com</div>
                <div className='user-data' >Games Owned : <span>4</span></div>
                <div className='user-data' >Badges : <span>4</span></div>
                <div className='user-data' >Gameplays : <span>8</span></div>
                <div className='user-data' >Ratings : <span>3</span></div>
                <div className='user-data' >Reviews : <span>3</span></div>
            </div>
            <div className='profile-user-side' >
                <div className='user-side-data' >Plan : <span>Monthly</span></div>
                <div className='user-side-data' >Tier : <span>Gold</span></div>
            </div>
        </div>
    )
}

export default profileCard;