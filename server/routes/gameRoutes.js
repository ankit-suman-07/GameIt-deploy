const express = require('express');
const Game = require('../models/GameModels');


const game_router = express.Router();

// Route to save a book
game_router.post('/', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.company ||
            !request.body.year 
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const newGame = {
            name: request.body.name,
            name: request.body.name,
            year: request.body.year,
        };

        const game = await Game.create(newGame);

        return response.status(201).send(game);

    } catch (error) {
        console.log(error.response);
        response.status(500).send({ message: error.message });
    }
});

// Route to Get All Books from database
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

// Route to Get 1 Book from database by id
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

// Route to update a Book
game_router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.email ||
            !request.body.password ||
            !request.body.type
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const { id } = request.params;

        const result = await Game.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Game not found' });
        }

        return response.status(200).send({ message: 'Game updated successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

// Route to delete a book
game_router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Game.findByIdAndDelete(id);

        if (!result) {
            return response.status(400).json({ message: 'Game not found' });
        }

        return response.status(200).send({ message: 'Game deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

module.exports = game_router;