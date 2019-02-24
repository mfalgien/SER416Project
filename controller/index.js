const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//routes
const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const donateRouter = require('./routes/donate');
const volunteerRouter = require('./routes/volunteer');
const enrolledRouter = require('./routes/enrolled');
const rentalRouter = require('./routes/rentals');
const requestsRouter = require('./routes/requests');
const paymentsRouter = require('./routes/payments');
const adminRounter = require('./routes/admin');

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
app.use('/volunteer', volunteerRouter);
app.use('/enrolled', enrolledRouter);
app.use('/rentals', rentalRouter);
app.use('/requests', requestsRouter);
app.use('/payments', paymentsRouter);
app.use('/admin', adminRounter);