const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');

const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/views'));
app.use(express.json())
app.use(methodOverride('_method'));

let blogs = [{
    id: uuid(),
    img: 'https://images.unsplash.com/photo-1618089086953-c1b3b2b6f19c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    heading: 'NATURE',
    des: 'chlo bhai kuch krlo '
}, {
    id: uuid(),
    img: 'https://images.unsplash.com/photo-1618938349925-043a4eeb3127?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    heading: 'NATURE',
    des: 'WE must respect nature and dont interfare in the working of nature'
}, {
    id: uuid(),
    img: 'https://images.unsplash.com/photo-1618681317438-a8dd7da06cd4?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    heading: 'NATURE',
    des: 'WE must respect nature and dont interfare in the working of nature'
}, {
    id: uuid(),
    img: 'https://images.unsplash.com/photo-1618661057302-8b01d93bd898?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    heading: 'NATURE',
    des: 'WE must respect nature and dont interfare in the working of nature'
}]

app.get('/', (req, res) => {
    res.send("Root route")
})

app.get('/blogs', (req, res) => {
    res.render('index', { blogs })
})

// new blog
app.get('/new', (req, res) => {
    res.render('new', {})
})

//making new blog
app.post('/new', (req, res) => {
    const { img, heading, des } = req.body
    blogs.push({ id: uuid(), img, heading, des })

    res.redirect('/blogs')
})

app.get('/blogs/:id', (req, res) => {
    const { id } = req.params
    const found = blogs.find(c => c.id === id)
    res.render('show', { blog: found })
})

app.get('/blogs/:id/edit', (req, res) => {
    const { id } = req.params
    const found = blogs.find(c => c.id === id)
    res.render('edit', { blog: found })
})

app.patch('/blogs/:id', (req, res) => {
    const { id } = req.params
    const found = blogs.find(c => c.id == id)
    const chngeBlog = req.body.des
    found.des = chngeBlog;

    res.redirect('/blogs')
})
app.delete('/blogs/:id/', (req, res) => {
    const { id } = req.params
    const temp = blogs.filter(c => c.id != id)
    blogs = temp
    res.redirect('/blogs')
})

app.listen(3000, () => {
    console.log("server listening at 3000 ")
})