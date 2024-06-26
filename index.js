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

app.use('/api/products', productRoutes)

app.put('/api/products/:id', async(req,res)=>{
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


app.get('/api/products/:id', async(req, res)=>{
    
})

app.delete('/api/products/:id', async(req,res)=>{
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
