// file : routes/comments.js
const express = require('express');
const router = express.Router();
//add comments controller
const commentsController = require('../controllers/commentsController');

// POST /ticket/:id/comments (create comment)
router.post('/:id/comments', commentsController.createNewComment);

module.exports = router;