import React, { createContext, useState } from 'react';

const UserContext = createContext();


const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [gamesList, setGamesList] = useState([]);
    const [allGenres, setAllGenres] = useState({});
    const [genreGamePage, setGenreGamePage] = useState("");

    const updateUser = (newUserData) => {
        setUser(newUserData);
    };


    return (
        <UserContext.Provider value={{
            user, updateUser, gamesList, setGamesList, allGenres, setAllGenres, genreGamePage, setGenreGamePage
        }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
