const { check, validationResult } = require('express-validator');
const httpStatus = require('http-status');

const addArticleValidator = [
    check('title')
        .trim().notEmpty().withMessage("You need to add a title").escape()
        .isLength({min:3}).withMessage("Minimum of 3 required"),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(httpStatus.BAD_REQUEST).json({
                errors: errors.array()
            })
        }
        next();
    }
];


module.exports = {
    addArticleValidator
}