const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;
const db = require('./config/db');
const bodyParser = require('body-parser');
db();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.json());

app.use('/',require('./routers'));


app.listen(PORT,(err)=>{
    if(!err){
        console.log(`server start at http://localhost:${PORT}`); 
    }else{
        console.error('Error starting server:', err);
    }
});
