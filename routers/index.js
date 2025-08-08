const express = require('express');
const router = express.Router();
const bookRouter = require('./book.router');

router.use('/', bookRouter);

module.exports = router;