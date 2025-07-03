require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 5000 ;
//connect db
connectDB();



app.use(session({
  secret: process.env.SESSION_SECRET || 'sorunbaz-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 1 gün
  }
}));

app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});


app.use(express.urlencoded({ extended: true })); // body parser

app.use('/', require('./server/routes/comment'));


app.use(express.static('public'))

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs')

app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/auth'));   // auth router
app.use('/', require('./server/routes/create-post'));
app.use('/', require('./server/routes/profile'));

app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT}`)
});

