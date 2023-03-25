console.log('email newsletter')

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 8080
const app = express()

const MONGO_CONNECTION_STRING = "mongodb+srv://bilguun-enkh:JV341KR5DHasM50q@mernstackpineconedb.mwhgdhi.mongodb.net/test"

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send("<h1>email-newsletter</h1>")
})

app.post('/email', (req, res) => {
    const body = req.body
    console.log(body)
    res.json({
        status: 'Success',
        data: body
    })
})

app.listen(PORT, () =>{
    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log("Database connected succesfully"))
        .catch((error) => console.error(error))
    console.log(`Server is running on http://localhost:${PORT}`)
})