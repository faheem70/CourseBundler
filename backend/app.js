const express = require('express');
const database = require('./config/database');
const bodyParser = require('body-parser');
const app = express();
const user = require('./routes/userRoute')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



database.connectedToDatabase();


app.use('/api/v1', user);



module.exports = app;
