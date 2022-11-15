import express from 'express'
import dotenv from 'dotenv' //to change this from require syntax we have to add type = "module" in package.json file.
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'

dotenv.config() //activate .env

connectDB() //connecting the database by calling the connectDB function written in db.js

const app = express() //activate express server.

app.get('/' , (req,res) => {
    res.send("Api is running...") //this will be the result if the backend api link is home('/')
})

app.use('/api/products', productRoutes) //if the link has /api/products then we have to use the productRoutes.

const port  = process.env.PORT || 1234
app.listen(1234, console.log(`${process.env.MODE} server running on port ${port}!`.yellow.bold))
