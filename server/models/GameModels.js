const mongoose = require("mongoose");

const gameSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },

    },
);

const Game = mongoose.model('Games', gameSchema);
module.exports = Game;