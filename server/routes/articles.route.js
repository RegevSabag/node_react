const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const articlesController = require('../controllers/articles.controller');


router.route('/')
.post(auth('createAny', 'articles'), articlesController.createArticle)


// Categories
router.route('/categories')
.post(auth('createAny','categories'), articlesController.createCategory)
.get(auth('readAny','categories'), articlesController.getAllCategories)

module.exports = router;


