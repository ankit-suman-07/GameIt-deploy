import { React, useContext } from 'react';
import "./StudioNav.css";
import { UserContext } from '../../context/UserContext';

import Logo from "../../assets/logo.png";

const StudioNav = () => {
    const { user } = useContext(UserContext);
    return (
        <nav>
            <div className='studiohome-logo' >
                <img src={Logo} alt='website_logo' />
                <div className='studiohome-name' >
                    GAMEIT
                </div>
            </div>
            <div className='studio-welcome' >
                Welcome, <span>{user.name}</span>
            </div>
        </nav>

    )
}

export default StudioNav