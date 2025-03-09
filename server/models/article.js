const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'You need a title']
    },
    content: {
        type: String,
        required: [true, 'You need a content']
    },
    excerpt: {
        type: String,
        required: [true, 'You need a excerpt']
    },
    score: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    actors: {
        type: [String],
        required: true,
        validate: {
            validator: function(array){
                return array.length > 2;
            },
            message: "Ypu must add three at least"
        }
    },
    status: {
        type: String,
        required: true,
        enum: ['draft', 'public'],
        default:'draft',
        index: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }

});


const Article = mongoose.model('Article', articleSchema);
module.exports = { Article };