const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const port = 2563
const mongoUrl = "mongodb+srv://praveenorder:praveenorder@cluster0.dtfnwak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl,{})
mongoose.connection.on('connected', () => {
    console.log('MongoDb is Successfully connected')
})

const userRoutes = require('./routes/userRoutes')
app.use('/prav', userRoutes)

app.listen(port, () => {
    console.log("port is connected to " + " " +port)
})