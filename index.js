import { connect } from 'mongoose'
import express, { json } from 'express'
import Product from './models/product.model'
require('dotenv').config()

const app = express()
app.use(json())

app.get('/', (req, res)=>{
    res.send('Hello there')
})

app.post('/api/products', (req,res)=>{
    const product = await Product
})

connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to database")
    app.listen(3000, ()=> console.log("Server running on port 3000"))
}).catch((err)=> console.log("Failed to connect to database", err))
