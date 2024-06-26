import { connect } from 'mongoose'
import express, { json, urlencoded } from 'express'
import Product from './models/product.model.js'
import 'dotenv/config'

const app = express()
app.use(json())
app.use(urlencoded({extended:false}))

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

app.put('/api/product/:id', async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if(!product) return res.status(404).json({message: "Product does not exist"})
        
        const updatedProduct = await Product.findById(id)
        res.status(200).json({message:"Product updated successfully", updatedProduct})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/api/products', async(req, res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/api/product/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const product = await Product.findById(id)

        if(!product) return res.status(404).json({message: "Product does not exist"})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.delete('/api/product/:id', async(req,res)=>{
    try{
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product) return res.status(404).json({message: "Product does not exist"})
        
        res.status(200).json({message:"Product deleted successfully"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to database")
    app.listen(3000, ()=> console.log("Server running on port 3000"))
}).catch((err)=> console.log("Failed to connect to database", err))
