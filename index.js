const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.get('/', (req, res)=>{
    res.send('Hello there')
})

mongoose.connect('mongodb+srv://obujunioremmanuel:JMRtooppjjDtQaYJ@backenddb.ftzfklg.mongodb.net/Product-API?retryWrites=true&w=majority&appName=backendDB').then(() => {
    console.log("Connected to database")
    app.listen(3000, ()=> console.log("Server running on port 3000"))
})
