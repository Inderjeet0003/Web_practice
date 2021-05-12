const express = require('express')
app = express()
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Product = require('./models/product.js')
const productRoutes = require('./routes/product')
    // const seedDB = require('./seed')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(methodOverride('_method'))

/////////////////// DATABASE //////////////////
mongoose.connect('mongodb://localhost:27017/shopApp', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch(err => {
        console.log("Connection Error");
        console.log(err);
    });

// seedDB()

///////////////////////////////////////

app.use(productRoutes)

app.listen(3000, () => {
    console.log('server listening...')
})