require('dotenv').config()
const express = require('express');
require('./config/db.config')(); //invocando a função

const app = express();

app.use(express.json())

const contentRouter = require("./routes/content.routes")
app.use('/content', contentRouter)



app.listen(Number(process.env.PORT), () => { //acessando a variável de objeto no dotenv
    console.log(`Server up and running at port ${process.env.PORT}`)
})


