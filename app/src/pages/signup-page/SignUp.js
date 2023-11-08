import { React, useState, useContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import "./SignUp.css";
//import { UserContext } from '../../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { auth } from "../../firebase/Firebase"
import BackGround from "../../assets/login-bg.png";
import { UserContext } from '../../context/UserContext';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');
    const [usertype, setType] = useState('');
    const [showError, setShowError] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const [isValidPassword, setIsValidPassword] = useState(true);

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setPassword(password);

        // Check if the password meets the criteria
        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,}$/;
        setIsValidPassword(passwordRegex.test(password));
    };

    const navigate = useNavigate();

    const { user, updateUser } = useContext(UserContext);

    // const handleSignUp = () => {

    // }

    const handleCreateUser = () => {
        if (!name || !email || !password || !passwordMatch || !usertype) {
            setShowError(true);
        }

        else if (password !== passwordMatch) {
            setPasswordMatchError(true);
        }
        else if (isValidPassword) {

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredentials) => {
                    console.log(userCredentials);

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
                        .post('https://server-gameit.onrender.com/users', sendData)
                        .then((response) => {
                            console.log('User created successfully:', response.data);
                            console.log(sendData);
                            navigate('/');
                        })
                        .catch((error) => {
                            console.error('Error creating user:', error);
                            // Handle error, e.g., show an error message to the user
                        });
                })
                .catch((error) => {
                    console.log(error);
                })
            navigate('/');
        }
        else {

        }

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
                    {
                        !isValidPassword &&
                        <div>
                            <span className='signup-error' >* Password must contain atleast 6 characters</span>
                            <span className='signup-error' >* Password must contain atleast 1 digit</span>
                            <span className='signup-error' >* Password must contain atleast 1 spacial character</span>
                        </div>
                    }

                    <div className='signup-inner' >

                        <input type='name' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                        <input type='email' placeholder='Email ID' onChange={(e) => setEmail(e.target.value)} />
                        <input type='password' placeholder='Password' onChange={handlePasswordChange} />
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
            <Link to={'/login'} className='new-user-btn' >
                Existing User? Log In
            </Link>
        </div>
    )
}

export default SignUp