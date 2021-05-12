const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static('public'))

const todos = ["go to market", "gym", "homework", "cp", "web-dev "]
const product = {
    img: 'https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: 250,
    name: 'laptop',
    desc: 'this product is extremely priceless'
}

app.get('/', (req, res) => {
    res.send("root route")
})

app.get('/home', (req, res) => {
    res.render('home', { product: product })
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10 + 1)
    res.render('rand', { randomNum: num, todos: todos })
})

app.get('/static', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`)
})