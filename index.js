import { connect } from 'mongoose'
import express, { json } from 'express'
import Product from './models/product.model.js'
import 'dotenv/config'

const app = express()
app.use(json())

app.get('/', (req, res)=>{
    res.send('Hello there')
})

app.post('/api/products', async(req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json({message: "Product created", product})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/api/products', async(req, res)=>{
    const products = await Product.find({})
    res.status(200).json(products)
})

connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to database")
    app.listen(3000, ()=> console.log("Server running on port 3000"))
}).catch((err)=> console.log("Failed to connect to database", err))
