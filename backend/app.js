const express = require('express');
const database = require('./config/database');
const bodyParser = require('body-parser');
const app = express();
const user = require('./routes/userRoute')
const course = require('./routes/courseRoutes');
const ErrorMiddleware = require('./middleware/Error');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



database.connectedToDatabase();


app.use('/api/v1', user);
app.use('/api/v1', course)
app.use(ErrorMiddleware);


module.exports = app;
