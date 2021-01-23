// My first hard coded server!

// calls for express and cors
const express = require('express')
const cors = require ('cors')
// mongoose is what will connect the server to MongoDB 
const mongoose = require('mongoose')

// configures the variables in dontenv file
require('dotenv').config()

// how we create our express server
const app = express()
// port that the express server is on
const port = process.env.PORT || 5000

// Set up midleware..
// Sets up cors
app.use(cors())
// allows for the parsing of JSON
app.use(express.json())

// uri stores the specific connection to the my mongoDB
const uri = process.env.ATLAS_URI
// connect to the database with the uri
// flags are needed because of updates
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
)
//
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

// calling for the routes files
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// so if some one goes to /exercises it will load the exercises route
app.use('/exercises', exercisesRouter);
// if some one goes to /users it will load the users route
app.use('/users', usersRouter);

// listens on specified port for the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})