import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get(
  '/', 
  asyncHandler(async(req,res) => {
    console.log('masuk')
    const products = await Product.find({})
    console.log('hasil', products)
    res.json(products)
  })
)

// @desc    Fetch single products
// @route   GET /api/products/:id
// @access  Public
router.get(
  '/:id', 
  asyncHandler(async(req,res) => {
    console.log('masuk')
    const product = await Product.findById(req.params.id)
    console.log('hasil', products)
    if(product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router
