import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import axios from 'axios';
import './App.css';

import Upload from './components/upload-files/Upload';
import UploadVid from './components/upload-files/UploadVid';
// import VideoPlayer from './components/video-player/VideoPlayer';
// import VideoPlayers from './components/VP';
// import VideoUploader from './components/video-uploader/VideoUploader';


import Home from './pages/home/Home';
import HomeStudio from './pages/studio-home/HomeStudio';
import StudioShowGame from './pages/studio-home/studio-games/studio-show/StudioShowGame';
import StudioCreateGame from './pages/studio-home/studio-games/studio-create/StudioCreateGame';
import CreateUser from './CreateUser';
import StudioEditGame from './pages/studio-home/studio-games/studio-edit/StudioEditGame';
import SignUp from './pages/signup-page/SignUp';

import { UserProvider } from './context/UserContext';

function App() {

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homestudio" element={<HomeStudio />} />
          <Route path="/games/details/:id" element={<StudioShowGame />} />
          <Route path="/games/create" element={<StudioCreateGame />} />
          <Route path="/games/edit/:id" element={<StudioEditGame />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/uploadvid" element={<UploadVid />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/abc" element={<CreateUser />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
