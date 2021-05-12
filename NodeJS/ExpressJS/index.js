const express = require('express')
const app = express()

const PORT = 3000

// console.log(app)

// app.use(() => {
//     console.log("request made !!!")
// })

// app.use((req, res) => {
//     console.log(req)
//     res.send("<h1>this is HTTP Response</h1>")
// })

app.get('/', (req, res) => {
    // console.log("base page")
    res.send("<h1>base page</h1>")
})

app.get('/r/:cat', (req, res) => {
    // console.log('catt mewwww')
    console.log(req.params)
    const { cat } = req.params
    res.send(` ${cat} variable in link`)
})

// app.get('/dog', (req, res) => {
//     // console.log('dogg wooo-woof')
//     res.send("<h3>dog woo-woof</h3>")
// })

// app.post('/dog', (req, res) => {
//     // console.log('dogg wooo-woof')
//     res.send("<h3>post reequest of dog</h3>")
// })

// app.get('*', (req, res) => {
//     // console.log('dogg wooo-woof')
//     res.send("<h3>put correct path </h3>")
// })

app.listen(PORT, (req, res) => {
    console.log(`server listening at ${PORT}`)
})