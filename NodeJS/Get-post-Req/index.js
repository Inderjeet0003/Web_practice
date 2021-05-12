const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.get('/', (req, res) => {
    res.render('form')

})
app.get('/user', (req, res) => {
    const { username, age } = req.query
    res.send(`hello from get ${username}`)
})

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send(`post request occured`)
})

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`)
})