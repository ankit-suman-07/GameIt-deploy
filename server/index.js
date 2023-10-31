const express = require('express');
const cors = require('cors');
const app = express();

// Enable All CORS Requests
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/home', (req, res) => {
    res.send('Home Hello, World!');
});

// Add more routes as needed

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
