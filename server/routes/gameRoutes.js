const express = require('express');
const Game = require('../models/GameModels');  // Importing the Game model

const game_router = express.Router();

// Route to save a game
game_router.post('/', async (request, response) => {
    try {
        // Destructuring the required fields from the request body
        const { name, company, year, genre, tags, price, sold, rating, poster, trailer, screenshots, summary, reviews, consoleDevice } = request.body;

        // Validating if all required fields are provided, else send a 400 Bad Request response
        if (!name || !company || !year || !genre || !tags || !price || !rating || !poster || !trailer || !screenshots || !summary || !consoleDevice) {
            return response.status(400).send({
                message: 'Send all required fields: name, company, year, genre, tags, price, rating, poster, trailer, screenshots, summary, consoleDevice',
            });
        }

        // Creating a new game object with the provided data
        const newGame = {
            name,
            company,
            year,
            genre,
            tags,
            price,
            sold,
            rating,
            poster,
            trailer,
            screenshots,
            summary,
            reviews,
            consoleDevice
        };

        // Creating a new game entry in the database using the Game model
        const game = await Game.create(newGame);

        // Sending a 201 Created response along with the created game object
        return response.status(201).send(game);
    } catch (error) {
        console.log(error); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});

// Route to Get All Games from the database
game_router.get('/', async (request, response) => {
    try {
        // Fetching all game entries from the database
        const games = await Game.find({});

        // Sending a 200 OK response with the count of games and the game data as JSON
        return response.status(200).json({
            count: games.length,
            data: games,
        });
    } catch (error) {
        console.log(error); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});

// Route to Get a Game by ID
game_router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        // Fetching a game entry by its ID from the database
        const game = await Game.findById(id);

        // Sending a 200 OK response with the game data as JSON
        return response.status(200).json(game);
    } catch (error) {
        console.log(error); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});

// Route to Get all games of a genre
game_router.get('/:{genre}', async (req, res) => {
    try {
        const { genre } = request.params.genre;
        // Find all games from a certain genre in the database
        const actionGames = await Game.find({ genre: genre });

        // Sending a 200 OK response with the retrieved game data of the specified genre as JSON
        res.status(200).json(actionGames);
    } catch (error) {
        console.error(error); // Logging any errors to the console
        res.status(500).json({ message: 'Internal Server Error' }); // Sending a 500 Internal Server Error response
    }
});

// Route to update a Game
game_router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const updatedGame = request.body; // Assuming request body contains updated game data

        // Updating the game entry in the database by its ID and returning the updated data
        const result = await Game.findByIdAndUpdate(id, updatedGame, { new: true });

        // If the game is not found, send a 404 Not Found response
        if (!result) {
            return response.status(404).json({ message: 'Game not found' });
        }

        // Sending a 200 OK response with the updated game data as JSON
        return response.status(200).send(result);
    } catch (error) {
        console.log(error.message); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});

// Route to delete a Game
game_router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        // Deleting the game entry from the database by its ID
        const result = await Game.findByIdAndDelete(id);

        // If the game is not found, send a 404 Not Found response
        if (!result) {
            return response.status(404).json({ message: 'Game not found' });
        }

        // Sending a 200 OK response with a success message as JSON
        return response.status(200).send({ message: 'Game deleted successfully' });
    } catch (error) {
        console.log(error.message); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});

module.exports = game_router; // Exporting the game_router for use in other files
