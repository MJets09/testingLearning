
const express = require('express')
const app = express()

app.listen(3500, () => {
    console.log('On port 3500')
})

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})