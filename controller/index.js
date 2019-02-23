const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//routes
const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const donateRouter = require('./routes/donate');

app.listen(8001, function () {
    console.log('Listening on 8001...');
});

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/donate', donateRouter);