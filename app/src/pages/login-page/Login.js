import { React, useContext, useState } from 'react';
import "./Login.css";
import { UserContext } from '../../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';

import BackGround from "../../assets/login-bg.png";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    const navigate = useNavigate();

    const { user, updateUser } = useContext(UserContext);

    const handleLogin = () => {
        if (!email || !password) {
            setShowError(true);
        }


        updateUser({ email, password });
        console.log(user)
        navigate('/');
    }
    return (
        <div className='login-outer' >
            <img src={BackGround} alt='background' />

            <div className='login-box-outer' >
                <div className='login-box' >
                    <div className='login-box-header' >
                        LOG IN
                    </div>
                    {
                        showError && <div className='login-error' >
                            ** Please enter all the fields **
                        </div>
                    }
                    <div className='login-inner' >
                        <input type='email' placeholder='Email ID' onChange={(e) => setEmail(e.target.value)} />
                        <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleLogin} >Log In</button>
                        {/* <div className='mid-text' >
                            Or, Sign In using Google
                        </div> */}
                        {/* <img src={GoogleIcon} alt='google icon' /> */}
                    </div>
                    <div className='login-inner' >
                        Not an existing user?
                        <Link to={'/signup'} className='login-inner-signup' >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
            <Link to={'/signup'} className='new-user-btn' >
                New User? Sign Up
            </Link>
        </div>
    )
}

export default Login