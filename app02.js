const express = require('express')
const http = require("http");

const app = express()

app.use((req, res, next) => {
    console.log('In middleware 1')
    next()
})

app.use((req, res) => {
    console.log('In middleware 2')
    res.send('<h1>Hello from express</h1>')
})

const server = http.createServer(app)

server.listen(8000,() =>{
    console.log('Server is running at port 8000')
})