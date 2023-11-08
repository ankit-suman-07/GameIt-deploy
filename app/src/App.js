import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Upload from './components/upload-files/Upload';
import UploadVid from './components/upload-files/UploadVid';

import Home from './pages/home/Home';
import HomeStudio from './pages/studio-home/HomeStudio';
import UserHome from './pages/user-home/UserHome';
import StudioShowGame from './pages/studio-home/studio-games/studio-show/StudioShowGame';
import StudioCreateGame from './pages/studio-home/studio-games/studio-create/StudioCreateGame';
import CreateUser from './CreateUser';
import StudioEditGame from './pages/studio-home/studio-games/studio-edit/StudioEditGame';
import SignUp from './pages/signup-page/SignUp';
import Login from './pages/login-page/Login';
import Genres from './pages/genres/Genres';
import ProfileUser from './pages/user-home/user-profile/ProfileUser';
import Contact from './pages/contact-page/Contact';
import AboutUs from './pages/about-page/AboutUs';
import Notification from './pages/notification-page/Notification';
import GenreGames from './pages/genres/genre-games/GenreGames';

import { UserProvider } from './context/UserContext';

function App() {

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homestudio" element={<HomeStudio />} />
          <Route path="/homeuser" element={<UserHome />} />
          <Route path="/user/genres" element={<Genres />} />
          <Route path="/genre/games" element={<GenreGames />} />
          <Route path="/user/contactus" element={<Contact />} />
          <Route path="/user/about" element={<AboutUs />} />
          <Route path="/user/about" element={<Contact />} />
          <Route path="/user/profileuser" element={<ProfileUser />} />
          <Route path="/user/notifications" element={<Notification />} />
          <Route path="/games/details/:id" element={<StudioShowGame />} />
          <Route path="/games/create" element={<StudioCreateGame />} />
          <Route path="/games/edit/:id" element={<StudioEditGame />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/uploadvid" element={<UploadVid />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/abc" element={<CreateUser />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
