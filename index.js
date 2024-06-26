import { connect } from 'mongoose'
import express, { json, urlencoded } from 'express'
import productRoutes from './routes/products.route.js'
import 'dotenv/config'

const app = express()

//middleware
app.use(json())
app.use(urlencoded({extended:false}))

app.get('/', (req, res)=>{
    res.send('Hello there')
})

//Routes
app.use('/api/products', productRoutes)


//Database connection
connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to database")
    app.listen(3000, ()=> console.log("Server running on port 3000"))
}).catch((err)=> console.log("Failed to connect to database", err))
