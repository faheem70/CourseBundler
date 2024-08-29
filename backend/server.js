const app = require("./app")
const { config } = require("dotenv")
const database = require('./config/database');
const cloudinary = require('cloudinary').v2;

database.connectedToDatabase();

config({
    path: './config/config.env'
})

app.listen(process.env.PORT, () => {
    console.log(`Server is Running at ${process.env.PORT}`);
})
