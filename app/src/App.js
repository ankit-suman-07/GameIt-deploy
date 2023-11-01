import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [newdata, setNewdata] = useState({});

  axios
    .get('https://server-gameit.onrender.com/users')
    .then((response) => {
      //setBooks(response.data.data);
      console.log(response.data);
      //setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      //setLoading(false);
    });

  const reedit = () => {
    axios
      .get('https://server-gameit.onrender.com/users/65420c162600fc820f589de3')
      .then((response) => {
        //setBooks(response.data.data);
        console.log(response.data);
  //setLoading(false);
        setNewdata(response.data);
        console.log(newdata.email);
      })
      .catch((error) => {
        console.log(error);
        //setLoading(false);
      });
  }

  const display = () => {
    console.log(newdata.email);
  }

  const update = () => {

    const data = {
      name: "New demo User",
      email: "abc.gmail.com",
      password: "ewr43",
      type: "user"
    };
    axios
      .post('https://server-gameit.onrender.com/users', data)
      .then((response) => {
        //setBooks(response.data.data);
        console.log(response.data);
        //setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        //setLoading(false);
      });
  }

  const edit = () => {


    axios
      .patch('https://server-gameit.onrender.com/users/65420c162600fc820f589de3', { email: "abc.gmail.com" })
      .then((response) => {
        //setBooks(response.data.data);
        console.log(response.data);
        //setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        //setLoading(false);
      });
  }

  const deleteUser = () => {


    axios
      .delete('https://server-gameit.onrender.com/users/65420b190d1c42b8c30b8c9b')
      .then((response) => {
        //setBooks(response.data.data);
        console.log(response.data);
        //setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        //setLoading(false);
      });
  }


  return (
    <div className="App">
      <button onClick={update} >Update</button>
      <button onClick={edit} >Edit</button>
      <button onClick={deleteUser} >Delete User</button>
      <button onClick={reedit} >Re-edit</button>
      <button onClick={display} >Display</button>
    </div>
  );
}

export default App;
