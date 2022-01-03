const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');  //! part#1 point 7
const bodyParser = require('body-parser');  //! part#1 point 2



var port = process.env.PORT || 5000;  

//! part#2 point 6
// const nav= [
//     {
//         link:"/books",
//         title:"Books"
//     },
//     {
//         link:"/authors",
//         title:"Authors"
//     },
//     {
//         link:"/addbook",
//         title:"Add Book"
//     },
//     {
//         link:"/addauthor",
//         title:"Add Author"
//     }
// ]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');  //!Part #1 Point 3
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 

//! Part#1 point 2
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//!
app.use(express.urlencoded({extended:true})); 
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public')));  

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});




 app.listen(port,()=>{
    console.log("Server is Ready at 5000");  //!part#1 point 5
});

