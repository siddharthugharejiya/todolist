const express = require('express')
const Server = require('./config/server')
const TodoRouter = require('./Router/TodoRouter')
const cors = require('cors')
const UserRoute = require('./Router/UserRouter')
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/",TodoRouter)
app.use("/",UserRoute)
if (TextDecoderFatal == null) {
    TextDecoderFatal = new TextDecoder('utf8', { fatal: true });
}
app.listen(process.env.PORT,()=>{
    console.log("Port is running")
    Server()
})