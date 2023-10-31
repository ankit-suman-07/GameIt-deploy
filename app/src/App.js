import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  axios
    .get('https://server-gameit.onrender.com/games')
    .then((response) => {
      //setBooks(response.data.data);
      console.log(response.data);
      //setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      //setLoading(false);
    });

  const update = () => {

    const data = {
      name: "new Game",
      email: "abc.gmail.com",
      password: "ewr43",
      type: "user"
    };
    axios
      .post('https://server-gameit.onrender.com/games', data)
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
    </div>
  );
}

export default App;
