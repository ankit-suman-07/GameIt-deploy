const express = require('express');
const User = require('../models/UserModel');


const user_router = express.Router();

// Route to save a User
user_router.post('/', async (request, response) => {
    try {
        const { name, email, password, usertype, profile, saved, playing, bought, likes, reviews, notifications, warnings, plan } = request.body;

        if (!name || !email || !password || !usertype) {
            return response.status(400).send({
                message: 'Send all required fields: name, company, year, genre, tags, price, rating, poster, trailer, screenshots, summary, consoleDevice',
            });
        }

        const newUser = {
            name,
            email,
            password,
            usertype,
            profile,
            saved,
            playing,
            bought,
            likes,
            reviews,
            notifications,
            warnings,
            plan
        };

        const user = await User.create(newUser);

        return response.status(201).send(user);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

// Login route

user_router.get('/login/:email', async (request, response) => {
    try {
        const email = request.params.email; // Get email from URL parameter

        // Search for user by email
        const user = await User.findOne({ email: email });

        if (user) {
            // If user is found, return the password
            return response.status(200).json({
                message: 'Password found:',
                user: user,
            });
        } else {
            // If user is not found, return an appropriate message
            return response.status(404).json({
                message: 'User not found with the provided email id.',
            });
        }
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
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

// Route to Get 1 User from database by email
user_router.get('/email/:email', async (request, response) => {
    try {
        const { email } = request.params; // Extract email from route params

        // Find the user by email using findOne method
        const user = await User.findOne({ email: email });

        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }

        return response.status(200).json(user);
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route to update a User
// user_router.put('/:id', async (request, response) => {
//     try {
//         if (
//             !request.body.name ||
//             !request.body.email ||
//             !request.body.password ||
//             !request.body.type
//         ) {
//             return response.status(400).send({
//                 message: 'Send all required fields: title, author, publishYear',
//             });
//         }

//         const { id } = request.params;

//         const result = await User.findByIdAndUpdate(id, request.body);

//         if (!result) {
//             return response.status(404).json({ message: 'User not found' });
//         }

//         return response.status(200).send({ message: 'User updated successfully' });

//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message })
//     }
// });

// Route to update a Game
user_router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const updatedUser = request.body; // Assuming request body contains updated game data
        const result = await User.findByIdAndUpdate(id, updatedUser, { new: true });

        if (!result) {
            return response.status(404).json({ message: 'User not found' });
        }

        return response.status(200).send(result);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to delete a user
user_router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await User.findByIdAndDelete(id);

        if (!result) {
            return response.status(400).json({ message: 'User not found' });
        }

        return response.status(200).send({ message: 'User deleted successfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

module.exports = user_router;