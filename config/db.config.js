const mongoose = require('mongoose')

async function connect() {

    try {

        const connnection = await mongoose.connect(process.env.MONGODB_URI, {
            /* useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false, */
        })

        console.log("Connected to DB:", connnection.connection.name)

    } catch (error) {
        console.error("Database connection error:", error)
    }
}


module.exports = connect;