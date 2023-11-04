import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import axios from 'axios';
import './App.css';

import Upload from './Upload';
import UploadVid from './UploadVid';
// import VideoPlayer from './components/video-player/VideoPlayer';
// import VideoPlayers from './components/VP';
// import VideoUploader from './components/video-uploader/VideoUploader';


import Home from './pages/home/Home';
import HomeStudio from './pages/studio-home/HomeStudio';
import StudioShowGame from './pages/studio-home/studio-games/studio-show/StudioShowGame';

function App() {

  // const [newdata, setNewdata] = useState({});

  // axios
  //   .get('https://server-gameit.onrender.com/users')
  //   .then((response) => {
  //     //setBooks(response.data.data);
  //     console.log(response.data);
  //     //setLoading(false);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     //setLoading(false);
  //   });

  // const reedit = () => {
  //   axios
  //     .get('https://server-gameit.onrender.com/users/65420c162600fc820f589de3')
  //     .then((response) => {
  //       //setBooks(response.data.data);
  //       console.log(response.data);
  // //setLoading(false);
  //       setNewdata(response.data);
  //       console.log(newdata.email);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       //setLoading(false);
  //     });
  // }

  // const display = () => {
  //   console.log(newdata.email);
  // }

  // const update = () => {

  //   const data = {
  //     name: "New demo User",
  //     email: "abc.gmail.com",
  //     password: "ewr43",
  //     type: "user"
  //   };
  //   axios
  //     .post('https://server-gameit.onrender.com/users', data)
  //     .then((response) => {
  //       //setBooks(response.data.data);
  //       console.log(response.data);
  //       //setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       //setLoading(false);
  //     });
  // }

  // const edit = () => {


  //   axios
  //     .patch('https://server-gameit.onrender.com/users/65420c162600fc820f589de3', { email: "abc.gmail.com" })
  //     .then((response) => {
  //       //setBooks(response.data.data);
  //       console.log(response.data);
  //       //setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       //setLoading(false);
  //     });
  // }

  // const deleteUser = () => {


  //   axios
  //     .delete('https://server-gameit.onrender.com/users/65420b190d1c42b8c30b8c9b')
  //     .then((response) => {
  //       //setBooks(response.data.data);
  //       console.log(response.data);
  //       //setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       //setLoading(false);
  //     });
  // }


  return (
    <div className="App">
      {/* <button onClick={update} >Update</button>
      <button onClick={edit} >Edit</button>
      <button onClick={deleteUser} >Delete User</button>
      <button onClick={reedit} >Re-edit</button>
      <button onClick={display} >Display</button>
      <div>
        <h3>Video.js</h3>
        <VideoPlayers />
      </div>
      <div>
        <VideoPlayer />
      </div>
      <div>
        <VideoUploader />
      </div> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homestudio" element={<HomeStudio />} />
          <Route path="/games/details/:id" element={<StudioShowGame />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/uploadvid" element={<UploadVid />} />
          {/* <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
