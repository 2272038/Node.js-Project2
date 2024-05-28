const express = require('express')
const http = require("http");

const app = express()

const myRoutes = require('./routes/route07.js')

app.use(express.urlencoded({
    extended: false
}))

app.use(myRoutes)

const server = http.createServer(app)

server.listen(8001,() =>{
    console.log('Server is running at port 8000')
})