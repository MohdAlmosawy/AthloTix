// file : routes/comments.js
const express = require('express');
const router = express.Router();
//add comments controller
const commentsController = require('../controllers/comments');

// POST /ticket/:id/comments (create comment)
router.post('/tickets/:id/comments', commentsController.createNewComment);

module.exports = router;