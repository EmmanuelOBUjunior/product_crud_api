import express from 'express'
import { getProducts, getProductById, createProduct } from '../controllers/product.controller'

const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProductById)
router.post('/', createProduct)