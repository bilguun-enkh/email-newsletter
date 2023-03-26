console.log('email newsletter')

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 8080
const app = express()

const MONGO_CONNECTION_STRING = "mongodb+srv://bilguun-enkh:JV341KR5DHasM50q@mernstackpineconedb.mwhgdhi.mongodb.net/test"

app.use(express.json())
app.use(cors());

app.post('/email', (request, response) => {
    try {
        const body = request.body
        console.log(body)
        response.json({
            status: 'Success',
            data: body
        })
    } catch (error) {
        response.status(400).json({
            status: 'Error',
            message: 'Invalid JSON data'
        })
    }
})

app.post('/email', (request, response) => {
    const body = request.body
    console.log(body)
    response.json({
        status: 'Success',
        data: body
    })
})

app.listen(PORT, () => {
    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log("Database connected succesfully"))
        .catch((error) => console.error(error))
    console.log(`Server is running on http://localhost:${PORT}`)
})