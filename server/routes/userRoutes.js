const express = require('express');
const User = require('../models/UserModel'); // Importing the User model

const user_router = express.Router();

// Route to save a User
user_router.post('/', async (request, response) => {
    try {
        // Destructuring the required fields from the request body
        const { name, email, password, usertype, profile, saved, playing, bought, likes, reviews, notifications, warnings, plan } = request.body;

        // Validating if all required fields are provided, else send a 400 Bad Request response
        if (!name || !email || !password || !usertype) {
            return response.status(400).send({
                message: 'Send all required fields: name, email, password, usertype',
            });
        }

        // Creating a new user object with the provided data
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

        // Creating a new user entry in the database using the User model
        const user = await User.create(newUser);

        // Sending a 201 Created response along with the created user object
        return response.status(201).send(user);
    } catch (error) {
        console.log(error); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});

// Login route
user_router.get('/login/:email', async (request, response) => {
    try {
        const email = request.params.email; // Get email from URL parameter

        // Search for user by email in the database
        const user = await User.findOne({ email: email });

        if (user) {
            // If user is found, return the user data
            return response.status(200).json({
                message: 'User found:',
                user: user,
            });
        } else {
            // If user is not found, return an appropriate message
            return response.status(404).json({
                message: 'User not found with the provided email id.',
            });
        }
    } catch (error) {
        console.error(error); // Logging any errors to the console
        return response.status(500).json({ message: 'Internal Server Error' }); // Sending a 500 Internal Server Error response
    }
});

// Route to Get All Users from the database
user_router.get('/', async (request, response) => {
    try {
        // Fetching all user entries from the database
        const users = await User.find({});

        // Sending a 200 OK response with the count of users and the user data as JSON
        return response.status(200).json({
            count: users.length,
            data: users,
        });
    } catch (error) {
        console.log(error); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});

// Route to Get 1 User from the database by ID
user_router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        // Fetching a user entry by its ID from the database
        const user = await User.findById(id);

        // Sending a 200 OK response with the user data as JSON
        return response.status(200).json(user);
    } catch (error) {
        console.log(error); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});

// Route to Get 1 User from the database by email
user_router.get('/email/:email', async (request, response) => {
    try {
        const { email } = request.params; // Extract email from route params

        // Find the user by email using findOne method in the database
        const user = await User.findOne({ email: email });

        // If user is not found, send a 404 Not Found response
        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }

        // Sending a 200 OK response with the user data as JSON
        return response.status(200).json(user);
    } catch (error) {
        console.error(error); // Logging any errors to the console
        response.status(500).json({ message: 'Internal Server Error' }); // Sending a 500 Internal Server Error response
    }
});

// Route to update a User
user_router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const updatedUser = request.body; // Assuming request body contains updated user data

        // Updating the user entry in the database by its ID and returning the updated data
        const result = await User.findByIdAndUpdate(id, updatedUser, { new: true });

        // If the user is not found, send a 404 Not Found response
        if (!result) {
            return response.status(404).json({ message: 'User not found' });
        }

        // Sending a 200 OK response with the updated user data as JSON
        return response.status(200).send(result);
    } catch (error) {
        console.log(error.message); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});

// Route to delete a User
user_router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        // Deleting the user entry from the database by its ID
        const result = await User.findByIdAndDelete(id);

        // If the user is not found, send a 404 Not Found response
        if (!result) {
            return response.status(400).json({ message: 'User not found' });
        }

        // Sending a 200 OK response with a success message as JSON
        return response.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        console.log(error.message); // Logging any errors to the console
        response.status(500).send({ message: error.message }); // Sending a 500 Internal Server Error response
    }
});

module.exports = user_router; // Exporting the user_router for use in other files
