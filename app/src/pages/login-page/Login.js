import { React, useContext, useState } from 'react';
import "./Login.css";
import { UserContext } from '../../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Firebase"
import axios from 'axios';

import BackGround from "../../assets/login-bg.png";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const [userError, setUserError] = useState(false);

    const navigate = useNavigate();

    const { user, updateUser, updateEmail } = useContext(UserContext);

    const handleLogin = () => {
        // Make sure email is not empty before making the request
        if (!email) {
            setShowError(true);
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
        // Make API request to the /login/:email endpoint
                // Make API request to the /login/:email endpoint
                axios.get(`http://localhost:5000/users/login/${email}`)
                    .then(response => {
                        // Handle successful response here
                        console.log(response.data);
                        // Update state, set user data, or perform other actions
                        if (response.data.user.password === password) {
                            console.log('password match')
                            updateUser(response.data.user);
                            console.log(response.data.user);
                            console.log(response.data.user.usertype);
                            navigate('/');
                        }
                        else {
                            console.log();
                            setShowError('Password mismatch');
                        }
                    })
                    .catch(error => {
                        // Handle error response here
                        console.error(error);
                // Update state with error message
                    });
                navigate('/');
            })
            .catch((error) => {
                setUserError(true);

            })

        navigate('/');
    };
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
                    {
                        userError && <div className='login-error' >
                            ** User Not Found **
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