const express = require('express');
const User = require('../models/UserModel');


const user_router = express.Router();

// Route to save a book
user_router.post('/', async (request, response) => {
    try {
        const { name, email, password, type, profile, saved, playing, bought, likes, reviews, notifications, warnings } = request.body;

        if (!name || !email || !password || !type) {
            return response.status(400).send({
                message: 'Send all required fields: name, company, year, genre, tags, price, rating, poster, trailer, screenshots, summary, consoleDevice',
            });
        }

        const newUser = {
            name,
            email,
            password,
            type,
            profile,
            saved,
            playing,
            bought,
            likes,
            reviews,
            notifications,
            warnings
        };

        const user = await User.create(newUser);

        return response.status(201).send(user);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

// Route to Get All Books from database
user_router.get('/', async (request, response) => {
    try {
        const users = await User.find({});
        return response.status(200).json({
            count: users.length,
            data: users,
        });
    } catch (error) {
        console.log(error.response);
        response.status(500).send({ message: error.message });
    }
});

// Route to Get 1 Book from database by id
user_router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const user = await User.findById(id);
        return response.status(200).json(user);
    } catch (error) {
        console.log(error.response);
        response.status(500).send({ message: error.message });
    }
});

// Route to Get 1 Book from database by id
user_router.get('/:email', async (request, response) => {
    try {
        const { id } = request.params;

        const user = await User.findById(id);
        return response.status(200).json(user);
    } catch (error) {
        console.log(error.response);
        response.status(500).send({ message: error.message });
    }
});

// Route to update a Book
user_router.put('/:id', async (request, response) => {
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

        const result = await User.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'User not found' });
        }

        return response.status(200).send({ message: 'User updated successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

// Route to delete a book
user_router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await User.findByIdAndDelete(id);

        if (!result) {
            return response.status(400).json({ message: 'Book not found' });
        }

        return response.status(200).send({ message: 'Book deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

module.exports = user_router;