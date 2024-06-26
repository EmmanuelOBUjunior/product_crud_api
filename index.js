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


app.delete('/api/products/:id', async(req,res)=>{
})

connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to database")
    app.listen(3000, ()=> console.log("Server running on port 3000"))
}).catch((err)=> console.log("Failed to connect to database", err))
