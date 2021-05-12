const btn = document.querySelector('button')
const inp = document.querySelector('#inp')
const list = document.querySelector('#list')
const socket = io()

socket.on('received_msg', (data) => {
    const li = document.createElement('li')
    li.innerText = `${data.id} say-> ${data.msg}`

    list.append(li);
})

btn.addEventListener('click', () => {
    socket.emit('send_msg', {
        msg: inp.value
    })
    inp.value = ""
})