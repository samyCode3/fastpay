const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullname: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type :  Array
    }
})