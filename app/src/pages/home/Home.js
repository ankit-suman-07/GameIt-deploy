import { React, useContext } from 'react';
import "./Home.css";
import { UserContext } from '../../context/UserContext';
import Login from '../login-page/Login';
import HomeStudio from '../studio-home/HomeStudio';
import UserHome from '../user-home/UserHome';

const Home = () => {
    const { user } = useContext(UserContext);
    console.log(user);
    return (
        <div className='home-outer' >
            {
                user.email
                    ? (user.usertype === "Gamer"
                        ? <UserHome />
                        : (user.usertype === "Game Studio"
                            ? <HomeStudio />
                            : "User Admin"))
                    : <Login />
            }
        </div>
    )
}

export default Home