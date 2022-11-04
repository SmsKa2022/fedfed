const express = require('express')
const server = express()
const PORT = 3000
server.get('/', function (req, res) {
    res.send('Федя, ты справился!Отлично')
})


console.log("http://localhost:3000/")
server.listen(3000)
 
//lguyygugiuhiluhiuhiu