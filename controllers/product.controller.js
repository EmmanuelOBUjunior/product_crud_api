import Product from "../models/product.model";


export const createProduct = async (req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json({message: "Product created", product})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export const getProducts = async (req,res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getProductById = async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findById(id)

        if(!product) return res.status(404).json({message: "Product does not exist"})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}