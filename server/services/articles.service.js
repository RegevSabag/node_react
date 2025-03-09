const httpStatus = require('http-status');
const { Category } = require('../models/category');
const { Article } = require('../models/article');
const { ApiError } = require('../middleware/apiError');

const addArticle = async (body) => {
    try {

        const article = new Article({
            ...body,
            score: parseInt(body.score)
        });
        await article.save();
        return article;

    } catch (error) {
        throw error;
    }
}

const findArticleById = async (_id, user) => {
    try {
        const article = await Article.findById(_id).populate("category");
        if(!article) {
            throw new ApiError(httpStatus.NOT_FOUND, "Article is not found");
        }
        if(user.role === 'user'){
            throw new ApiError(httpStatus.NOT_FOUND, "Sorry you are not allowed");
        }
        return article;
    } catch (error) {
        throw error;
    }
}

const updatedById = async (_id, body) => {
    try {
        const article = await Article.findOneAndUpdate(
            {_id},
            {"$set": body},
            {new: true}

        )
        if(!article){
            throw new ApiError(httpStatus.NOT_FOUND, "Article not found");
        }
        return article;
    } catch (error) {
        throw error;
    }
}

const findAndDeleteArticleById = async (_id) => {
    try {
        const article = await Article.findOneAndDelete(_id);
        if(!article){
            throw new ApiError(httpStatus.NOT_FOUND, "Article not found");
        }
        return article;

    } catch (error) {
        throw error;
    }
}

const addCategory = async (body) => {
    try {
        // validation

        const category = new Category({name: body.name});
        await category.save();
        return category;

    } catch (error) {
        throw error;
    }
}

const findAllCategories = async () => {
    try {
        const categories = await Category.find({});
        return categories;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addCategory,
    findAllCategories,
    addArticle,
    findArticleById,
    updatedById,
    findAndDeleteArticleById
}
