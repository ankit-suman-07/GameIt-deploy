import { React, useContext } from 'react';
import "./StudioNav.css";
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

import Logo from "../../assets/logo.png";

const StudioNav = () => {
    const { user } = useContext(UserContext);
    return (
        <nav>
            <Link to={'/homestudio'} className='studiohome-logo' >
                <img src={Logo} alt='website_logo' />
                <div className='studiohome-name' >
                    GAMEIT
                </div>
            </Link>
            <div className='studio-welcome' >
                Welcome, <span>{user.name}</span>
            </div>
        </nav>

    )
}

export default StudioNav