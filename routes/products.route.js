import express from 'express'
import { getProducts, getProductById, createProduct, updateProduct } from '../controllers/product.controller'

const router = express.Router()

router.post('/', createProduct)
router.get('/', getProducts)
router.get('/:id', getProductById)
router.put('/:id', updateProduct)


export default router