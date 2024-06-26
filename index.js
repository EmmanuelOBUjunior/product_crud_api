const mongoose = require('mongoose')
const express = require('express')
const Product  = require('./models/product.model.js')
require('dotenv').config()

const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Hello there')
})

app.post('/api/products', async(req,res)=>{
    const product = await Product
})

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to database")
    app.listen(3000, ()=> console.log("Server running on port 3000"))
}).catch((err)=> console.log("Failed to connect to database", err))
