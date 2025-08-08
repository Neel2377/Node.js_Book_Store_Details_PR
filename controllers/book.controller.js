const Book = require('../models/book.model');

module.exports.homepage = async(req,res) =>{
    try {
        await res.render('index');
    } catch (error) {
        console.log(error);
        
    }
}

module.exports.addBook = async(req,res)=>{
    try {
        await Book.create(req.body);
        console.log('book added');
        res.redirect('/add');
    } catch (error) {
        console.log(error);
    }
}

module.exports.addBookPage =  (req, res) => {
    res.render('pages/addbook');
};

module.exports.viewBookPage = async (req, res) => {
     try {
        const books = await Book.find();
        res.render('pages/viewbook', { books });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};


module.exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        await Book.findByIdAndDelete(id);
        console.log('Book deleted successfully');
        res.redirect('/view');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.editBookPage = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        console.log(book);
        res.render('pages/editbook', { book });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        await Book.findByIdAndUpdate(id, req.body);
        res.redirect('/view');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};
