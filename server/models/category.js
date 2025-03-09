const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'You need a category name'],
        unique: true,
        trim: true,
        maxLength: 100,
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const Category = mongoose.model('Category', categorySchema);
module.exports = { Category };