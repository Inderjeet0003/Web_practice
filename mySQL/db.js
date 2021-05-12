 const { Sequelize } = require('sequelize')

 const sequelize = new Sequelize('blog_app', 'root', 'root', {
     host: 'localhost',
     dialect: 'mysql'
 });


 const connectDB = async() => {
     try {
         await sequelize.authenticate()
         console.log('connection open')
     } catch (e) {
         console.log('db connection failed')
     }
 }

 module.exports = connectDB


 global.sequelize = sequelize