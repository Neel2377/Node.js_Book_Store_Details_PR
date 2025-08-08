const mongoose = require("mongoose");


const db = async () => {
    try {
        await mongoose.connect('mongodb+srv://bneel289:12345@cluster1.bjljydu.mongodb.net/Books');
        console.log('Connected to the database successfully');
    } catch (error) {
        console.log('Error connecting to the database:', error);

    }
}

module.exports = db;