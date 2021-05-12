const express = require('express')
const app = express()
const path = require('path')
const connectDB = require('./db')
const Blog = require('./models/blog')


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname), '/views')


app.get('/', (req, res) => {
    res.send('connected')
})

connectDB()
app.listen(8080, () => {
    console.log('server running ...')
})