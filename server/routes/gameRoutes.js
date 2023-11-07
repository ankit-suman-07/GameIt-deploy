const express = require('express');
const Game = require('../models/GameModels');

const game_router = express.Router();

// Route to save a game
game_router.post('/', async (request, response) => {
    try {
        const { name, company, year, genre, tags, price, sold, rating, poster, trailer, screenshots, summary, reviews, consoleDevice } = request.body;

        if (!name || !company || !year || !genre || !tags || !price || !rating || !poster || !trailer || !screenshots || !summary || !consoleDevice) {
            return response.status(400).send({
                message: 'Send all required fields: name, company, year, genre, tags, price, rating, poster, trailer, screenshots, summary, consoleDevice',
            });
        }

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

        const game = await Game.create(newGame);

        return response.status(201).send(game);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

// Route to Get All Games from the database
game_router.get('/', async (request, response) => {
    try {
        const games = await Game.find({});
        return response.status(200).json({
            count: games.length,
            data: games,
        });
    } catch (error) {
        console.log(error.response);
        response.status(500).send({ message: error.message });
    }
});

// Route to Get a Game by ID
game_router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const game = await Game.findById(id);
        return response.status(200).json(game);
    } catch (error) {
        console.log(error.response);
        response.status(500).send({ message: error.message });
    }
});

// Route to Get all games of a genre
game_router.get('/:{genre}', async (req, res) => {
    try {
        const { genre } = request.params.genre;
        // Find all games from a certain genre
        const actionGames = await Game.find({ genre: genre });

        // Send the retrieved data as a JSON response
        res.status(200).json(actionGames);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route to update a Game
game_router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const updatedGame = request.body; // Assuming request body contains updated game data
        const result = await Game.findByIdAndUpdate(id, updatedGame, { new: true });

        if (!result) {
            return response.status(404).json({ message: 'Game not found' });
        }

        return response.status(200).send(result);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to delete a Game
game_router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Game.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Game not found' });
        }

        return response.status(200).send({ message: 'Game deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

module.exports = game_router;
