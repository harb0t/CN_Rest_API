const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    // common to abrv to pass
    password: {
        type: String,
        required: true,
    },
});
//assign to model
const User = mongoose.model("User", userSchema);

module.exports = User;