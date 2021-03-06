const express = require('express')
const app = express()
const products = require('../products.json')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const port = 3200

app.get('/api/products', getProducts)
app.get('/api/products/:id', getProduct);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})