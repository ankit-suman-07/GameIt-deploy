import React from 'react';
import "./StudioNav.css";

import Logo from "../../assets/logo.png";

const StudioNav = () => {
    return (
        <nav>
            <div className='studiohome-logo' >
                <img src={Logo} alt='website_logo' />
                <div className='studiohome-name' >
                    GAMEIT
                </div>
            </div>
            <div className='studio-welcome' >
                Welcome, <span>Studio name</span>
            </div>
        </nav>

    )
}

export default StudioNav