var express = require('express');
var router = express.Router();

let models = require('../lib/models');
// console.log(models)

// Create question - POST - /api/v1/questions
// Create answer - POST - /api/v1/answers
// Fetch categories - GET - /api/v1/categories
// Fetch questions - GET - /api/v1/questions
// Fetch answers - GET - /api/v1/answers


// Fetch categories - GET - /api/v1/categories
router.get('/categories', async function (req, res, next) {
    // write some code here to fetch the categories
    let categories = await models.Category.findAll({})
    res.json(categories);
});


// Fetch questions - GET - /api/v1/questions
// /categories/2/questions
// /categories/3/questions
router.get(`/categories/:categoryId/questions`, async function (req, res, next) {
    // write some code here to fetch the questions
    let questions = await models.Question.findAll({ where: { categoryId: req.params.categoryId } })
    res.json(questions);
});

// Fetch answers - GET - /api/v1/answers
router.get('/questions/:questionId/answers', async function (req, res, next) {
    // write some code here to fetch the answers
    let answers = await models.Answer.findAll({ where: { questionId: req.params.questionId } })
    res.json(answers);
});



// Create question - POST - /api/v1/questions
router.post('/categories/:categoryId/questions', async function (req, res, next) {
    // write some code here to create a question
    console.log('req.body', req.body);
    let question = await models.Question.create({ questionTxt: req.body.questionTxt, categoryId: req.params.categoryId });
    res.json(question);
});


// Create answer - POST - /api/v1/answers
router.post('/questions/:questionId/answers', async function (req, res, next) {
    // write some code here to create an answer
    let answer = await models.Answer.create({ answerTxt: req.body.questionTxt, questionId: req.params.questionId });
    res.json(answer);
});





/* GET home page. */
// api/v1/test
router.get('/test', function (req, res, next) {
    res.json({ success: true });
});

module.exports = router;