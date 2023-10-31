const express = require('express');
const cors = require('cors');
const app = express();

// Enable All CORS Requests
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Handle requests for /favicon.ico
app.get('/favicon.ico', (req, res) => {
    // Serve your custom or default favicon here
    res.status(200).sendFile('/');
});

app.get('/home', (req, res) => {
    res.send('Home Hello, World!');
});

// Add more routes as needed

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
