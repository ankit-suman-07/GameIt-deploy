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

    // const genreUpdates = () => {
    //     const genreList = {
    //         "Action": 0, "RPG": 0, "ActionAdventure": 0, "Adventure": 0, "SuperHero": 0,
    //         "Casual": 0, "Fighting": 0, "Horror": 0, "Platformer": 0, "Racing": 0,
    //         "Shooter": 0, "Simulator": 0, "Sports": 0, "Strategy": 0

    //     };

    //     gamesList.map((game) => {
    //         game.genre.map((item) => {
    //             genreList[item] += 1;
    //         })
    //     })

    console.log("COntext user --> ", allGenres);
    //     setAllGenres(genreList);
    // }

    return (
        <UserContext.Provider value={{ user, updateUser, gamesList, setGamesList, allGenres, setAllGenres, genreGamePage, setGenreGamePage }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
