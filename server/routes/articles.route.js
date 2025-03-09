const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const { addArticleValidator } = require("../middleware/validation");
const articlesController = require('../controllers/articles.controller');


router.route('/')
.post(auth('createAny', 'articles'), addArticleValidator, articlesController.createArticle)

router.route('/article/:id')
.get(auth('readAny', 'articles'), articlesController.getArticleById)
.patch(auth('updateAny', 'articles'), articlesController.updatedArticleById)
.delete(auth('deleteAny', 'articles'), articlesController.deleteArticlesById)

// Categories
router.route('/categories')
.post(auth('createAny','categories'), articlesController.createCategory)
.get(auth('readAny','categories'), articlesController.getAllCategories)

module.exports = router;


