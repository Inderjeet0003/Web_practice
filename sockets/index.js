const express = require('express')
const app = express()
const http = require('http')
const socketio = require('socket.io')
const path = require('path')

const server = http.createServer(app)
const io = socketio(server)

app.use('/', express.static(path.join(__dirname, '/public')))
    // app.get('/', (req, res) => {
    //     // res.send('connected by express server at 3000')
    //     res.render('index')
    // })

io.on('connection', (socket) => {
    socket.on('send_msg', (data) => {
        console.log(`${socket.id} says --> ${data.msg}`)

        io.emit('received_msg', {
            msg: data.msg,
            id: socket.id
        })
    })

    console.log(socket.id)

})



server.listen(3000, () => {
    console.log('server listening at 3000')
})