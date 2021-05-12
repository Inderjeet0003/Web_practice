const express = require('express')
const path = require('path')
const app = express()
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid');
// uuid();
const PORT = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.urlencoded({
    extended: true
}))
app.use(methodOverride('_method'))
let comments = [{
            id: uuid(),
            username: 'jeet',
            body: 'this is my commnet'
        },
        {
            id: uuid(),
            username: 'cat',
            body: 'mew meouwww'
        },
        {
            id: uuid(),
            username: 'dog',
            body: 'wow wooff wofff'
        }
    ]
    // list all comments
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

// taking new comment
app.get('/comments/new', (req, res) => {
    res.render('comments/new')

})

// create new comment
app.post('/comments', (req, res) => {
    const { username, body } = req.body
    const id = comments.length;
    comments.push({ id: uuid(), username, body })
        // console.log(req.body)
        // res.send("new commment route created")
    res.redirect('/comments')

})

//displaying any comment
app.get('/comments/:id', (req, res) => {
    const { id } = req.params
    const foundComment = comments.find(c => c.id === (id));
    // console.log(foundComment);
    // res.send(foundComment)
    res.render('comments/show', { comment: foundComment })
})

// editing comment
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params
    const foundComment = comments.find(c => c.id === (id));

    res.render('comments/edit', { comment: foundComment })
})

app.patch('/comments/:id', (req, res) => {

    const { id } = req.params
    const foundComment = comments.find(c => c.id === (id));
    console.log(req.body)
    const updatedCmmntText = req.body.body

    foundComment.body = updatedCmmntText
    res.redirect('/comments')
        // res.send('you hit the patch route')
})

app.delete('/comments/:id', (req, res) => {
    // res.send('u hit delete route')
    const { id } = req.params
    const temp = comments.filter(c => c.id !== id)
    comments = temp;
    res.redirect('/comments')
})

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`)

})