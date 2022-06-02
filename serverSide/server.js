
const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient


MongoClient.connect('mongodb-connection-string', (err, client) => {
    MongoClient.connect(connectionString, (err, client) => {
        if (err) return console.error(err)
        console.log('Connected to Database')
        'mongodb+srv://mthao09:<3169kaT>@cluster0.lojrg.mongodb.net/?retryWrites=true&w=majority'
      })
  })

app.use(bodyParser.urlencoded({ extended: true }))


app.listen(3500, () => {
    console.log('On port 3500')
})

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req,res)=>{
    res.send(console.log(req.body))
})