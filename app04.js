const express = require('express')
const http = require("http");

const app = express()

app.use(express.urlencoded({
    extended: false
}))

app.use('/page1',(req, res) => {
    res.send(`<form method="post" action="/page2">
    <label for="name-id">Name</label>
    <input type="text" id="name-id" name="name" autofocus>
    <button type="submit">Submit</button>
</form>`)
})

app.use('/page2',(req, res)=>{
    console.log(req.body)
    res.send(`
    <h1>Hello from express page 2</h1>
    <p>Hello, ${req.body.name}</p>
`)
})

app.use('/',(req, res, next) => {
    res.send('<h1>Hello from express</h1>')
})

const server = http.createServer(app)

server.listen(8000,() =>{
    console.log('Server is running at port 8000')
})