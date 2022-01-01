// !Part #1 Point 2  installing node modules(third party module)

const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');

var port = process.env.PORT || 5000;  //! Part #1 Point 1

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');  //!Part #1 Point 3
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(express.urlencoded({extended:true})); //!Part #2 point 10 
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public')));  //! Part #2 Point 6

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});



// !Part #1 point 5
 app.listen(port,()=>{
    console.log("Server is Ready at " + port);
});

