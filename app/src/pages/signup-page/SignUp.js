import { React, useState } from 'react';
import "./SignUp.css";
//import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import BackGround from "../../assets/login-bg.png";

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');
    const [usertype, setType] = useState('');
    const [showError, setShowError] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const navigate = useNavigate();

    //const { user, updateUser } = useContext(UserContext);

    // const handleSignUp = () => {

    // }

    const handleCreateUser = () => {
        if (!name || !email || !password || !passwordMatch || !usertype) {
            setShowError(true);
        }

        if (password !== passwordMatch) {
            setPasswordMatchError(true);
        }
        // updateUser({ email, password });
        // console.log(user)
        // navigate('/');
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(usertype);

        const sendData = {
            name,
            email,
            password,
            usertype,
            profile: "",
            saved: [],
            playing: [],
            bought: [],
            likes: [],
            reviews: {},
            notifications: [],
            warnings: [],
            plan: "",
        };
        axios
            .post('http://localhost:5000/users', sendData)
            .then((response) => {
                console.log('User created successfully:', response.data);
                console.log(sendData);
                navigate('/');
            })
            .catch((error) => {
                console.error('Error creating user:', error);
                // Handle error, e.g., show an error message to the user
            });
    };

    return (
        <div className='signup-outer' >
            <img src={BackGround} alt='background' />
            <div className='signup-box-outer' >
                <div className='signup-box' >
                    <div className='signup-box-header' >
                        SIGN UP FORM
                    </div>
                    {
                        showError && <div className='signup-error' >
                            ** Please enter all the fields **
                        </div>
                    }
                    {
                        passwordMatchError && <div className='signup-error' >
                            ** Passwords did not match **
                        </div>
                    }

                    <div className='signup-inner' >

                        <input type='name' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                        <input type='email' placeholder='Email ID' onChange={(e) => setEmail(e.target.value)} />
                        <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        <input type='password' placeholder='Confirm Password' onChange={(e) => setPasswordMatch(e.target.value)} />
                        {/* <input type='email' placeholder='Email ID' onChange={(e) => setEmail(e.target.value)} /> */}

                        <select onChange={(e) => setType(e.target.value)}>
                            <option value="" default>Account Type</option>
                            <option value="Gamer">Gamer</option>
                            <option value="Game Studio">Game Studio</option>
                            {/* Add more genre options as needed */}
                        </select>
                        {/* <button onClick={addGenre}>Add Genre</button> */}
                        {/* <div>
                            <strong>Selected Genres:</strong> {genre.join(', ')}
                        </div> */}
                        <button onClick={handleCreateUser} >Sign Up</button>
                        {/* <div className='mid-text' >
                            Or, Sign In using Google
                        </div> */}
                        {/* <img src={GoogleIcon} alt='google icon' /> */}
                    </div>
                    {/* <div className='login-inner' >
                        Not an existing user? Click Here
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default SignUp