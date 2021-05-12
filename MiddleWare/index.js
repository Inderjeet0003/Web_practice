const express = require('express')
app = express()

const verify = (req, res, next) => {
    const { pass } = req.query

    if (pass == '123') {
        next();
    }
    res.send('invalid password')
}

app.get('/secret', verify, (req, res) => {
    res.send('Secret leaked')
})

app.listen(3000, () => {
    console.log('server listening...')
})