import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  axios
    .get('https://server-gameit.onrender.com/games')
    .then((response) => {
      //setBooks(response.data.data);
      console.log(response);
      //setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      //setLoading(false);
    });

  return (
    <div className="App">

    </div>
  );
}

export default App;
