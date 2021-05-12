const express = require('express')
const app = express()

const session = require('express-session')

app.use(session({
    secret: 'thisisnotgoodsecret',
    resave: false,
    saveUninitialized: true
}))


app.get('/cnt', (req, res) => {
    if (req.session.count)
        req.session.count += 1
    else
        req.session.count = 1;

    res.send(`u hit this page ${req.session.count} times`)

})

app.get('/register', (req, res) => {
    const { name } = req.query
    req.session.name = name

    res.redirect('/greet')
})

app.get('/greet', (req, res) => {
    const { name = 'unknown' } = req.session


    res.send(`hello from ${name}`)
})

app.listen(3000, () => {
    console.log("server listening")
})