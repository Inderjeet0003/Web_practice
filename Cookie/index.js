const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.get('/greet', (req, res) => {
    console.log(req.cookies)
    const { name = "unknown" } = req.cookies

    res.send(`hy there - ${name}`)
})

app.get('/setName', (req, res) => {
    res.cookie('name', 'inderjet')
    res.cookie('mode', 'dark')
    res.send('sent a cookie successfully')
})

app.listen(3000, () => {
    console.log('server running ')
})