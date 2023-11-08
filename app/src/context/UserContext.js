import React, { createContext, useState } from 'react';
import axios from 'axios';
const UserContext = createContext();


const UserProvider = ({ children }) => {
    const [userMail, setUserMail] = useState("");
    const [user, setUser] = useState({});
    const [gamesList, setGamesList] = useState([]);
    const [allGenres, setAllGenres] = useState({});
    const [genreGamePage, setGenreGamePage] = useState("");

    const updateUser = (newUserData) => {
        setUser(newUserData);
    };



    const updateEmail = (email) => {
        setUserMail(email)
    }

    return (
        <UserContext.Provider value={{
            user, userMail, updateUser, gamesList, setGamesList, allGenres, setAllGenres, genreGamePage, setGenreGamePage, updateEmail
        }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
