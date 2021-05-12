const express = require('express')
const router = express.Router()
const Product = require('../models/product')

router.get('/products', async(req, res) => {
    const productList = await Product.find({})

    res.render('index', { products: productList })
})

router.get('/products/new', (req, res) => {

    res.render('new')
})

router.post('/products', async(req, res) => {
    console.log(req.body)
        // create() = use to insert into DB
    await Product.create(req.body)

    res.redirect('./products')
})

router.get('/products/:id', async(req, res) => {
    const { id } = req.params
    const product = await Product.findById(id);
    res.render('show', { product })
})

router.get('/products/:id/edit', async(req, res) => {
    const { id } = req.params
    const product = await Product.findById(id);
    res.render('edit', { product })
})

router.patch('/products/:id', async(req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body)
    console.log(req.body)

    res.redirect(`/products/${req.params.id}`)
})

router.delete('/products/:id', async(req, res) => {

    await Product.findByIdAndDelete(req.params.id);

    res.redirect('/products');
})

module.exports = router