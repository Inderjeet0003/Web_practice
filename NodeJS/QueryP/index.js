const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send("root route")
})

app.get('/search', (req, res) => {
    console.log(req.query)
    res.send("search page")
})

app.get('/greet', (req, res) => {
    console.log(req.query)
    const { username, age } = req.query
    res.send(`hello ${username} u are ${age} years of old `)
})


app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`)
})