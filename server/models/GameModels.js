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
            type: [String],
            required: true
        },
        tags: {
            type: [String],
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        rating: {
            type: String,
            required: true
        },
        poster: {
            type: String,
            required: true
        },
        trailer: {
            low: {
                type: String,
                required: true
            },
            mid: {
                type: String,
                required: true
            },
            high: {
                type: String,
                required: true
            }
        },
        screenshots: {
            type: [String],
            required: true
        },
        summary: {
            type: String,
            required: true
        },
        reviews: {
            type: Map,
            of: [String]
        },
        console: {
            type: [String],
            required: true
        },
        likes: {
            type: Number,
            default: 0,
        }

    },
);

const Game = mongoose.model('Games', gameSchema);
module.exports = Game;