const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

router.get('/',bookController.homepage);

router.get('/add',bookController.addBookPage); //load
router.post('/addbook',bookController.addBook); //form handle
router.get('/view',bookController.viewBookPage);

router.get('/delete/:id',bookController.deleteBook);

router.get('/edit/:id', bookController.editBookPage); // load edit page
router.post('/edit/:id', bookController.updateBook); // handle edit form submission

module.exports = router;