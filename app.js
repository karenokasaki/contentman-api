require('dotenv').config()

const express = require('express');
const app = express();

app.use(express.json())





app.listen(Number(process.env.PORT), () => { //acessando a variável de objeto no dotenv
    console.log(`Server up and running at port ${process.env.PORT}`)
})                         

