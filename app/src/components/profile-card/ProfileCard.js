import React, { useContext, useEffect } from 'react';
import "./ProfileCard.css";

import ProfileIcon from "../../assets/empty.png";
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const ProfileCard = () => {


    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.email) {
            navigate('/');
        }

        console.log(user)
    }, []);
    return (
        <div className='profile-card' >
            <div className='profile-user-img' >
                <img src={ProfileIcon} alt='user-profile' />
            </div>
            <div className='profile-user-data' >
                <div className='user-name' >{user.name}</div>
                <div className='user-email' >{user.email}</div>
                <div className='user-data' >Games Owned : <span>{user.email && user.bought.length}</span></div>
                <div className='user-data' >Badges : <span>4</span></div>
                <div className='user-data' >Ratings : <span>3</span></div>
            </div>
            <div className='profile-user-side' >
                <div className='user-side-data' >Plan : <span>{user.plan}</span></div>
                <div className='user-side-data' >Tier : <span>Bronze</span></div>
            </div>
        </div>
    )
}

export default ProfileCard;