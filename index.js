const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Hello there')
})

app.post('/api/products', (req,res)=>{
    
})

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to database")
    app.listen(3000, ()=> console.log("Server running on port 3000"))
}).catch((err)=> console.log("Failed to connect to database", err))
