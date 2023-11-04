const mongoose = require("mongoose");

const gameSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },
        genre: {
            type: [String]
        },
        tags: {
            type: [String]
        },
        price: {
            type: Number
        },
        rating: {
            type: String
        },
        poster: {
            type: String
        },
        trailer: {
            type: [String]
        },
        screenshots: {
            type: [String]
        },
        summary: {
            type: String
        },
        reviews: {
            type: Map,
            of: [String]
        },
        consoleDevice: {
            type: [String]
        },
        likes: {
            type: Number,
            default: 0,
        }

    },
);

const Game = mongoose.model('Games', gameSchema);
module.exports = Game;