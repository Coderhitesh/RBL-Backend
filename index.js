const express = require('express')
const app = express()
const dotenv = require('dotenv')
const Router = require('./Router/Route')
const PORT = process.env.PORT || 3001;
// const connectDb = require('./config/db')
const connectDb = require('./Config/db')
dotenv.config()
// const productRoutes = require('./routers/route')
const cors = require('cors')
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extends:true}))

app.use('/v1',Router)

app.listen(PORT,()=>{
    console.log('server run on' , PORT)
})

connectDb()