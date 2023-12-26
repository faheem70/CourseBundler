const app = require("./app")
const { config } = require("dotenv")

config({
    path: './config/config.env'
})

app.listen(process.env.PORT, () => {
    console.log(`Server is Running at ${process.env.PORT}`);
})