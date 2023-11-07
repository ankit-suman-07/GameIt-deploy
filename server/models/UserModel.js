const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
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
        usertype: {
            type: String,
            required: true,
        },
        profile: {
            type: String,
        },
        saved: {
            type: [String],
        },
        playing: {
            type: [String],
        },
        bought: {
            type: [String],
        },
        likes: {
            type: [String],
        },
        reviews: {
            type: Map,
            of: [String]
        },
        notifications: {
            type: [String],
        },
        warnings: {
            type: [String],
        },
        plan: {
            type: String,
        }
    },
);

const User = mongoose.model('User', userSchema);
module.exports = User;