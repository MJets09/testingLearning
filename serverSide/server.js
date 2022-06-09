const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())




MongoClient.connect('mongodb+srv://mthao:3169maT@cluster0.fmysz.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    const db = client.db('Quotes')
    const quotesCollection = db.collection('Basketball')

    app.post('/quotes', (req, res) => {
        quotesCollection.insertOne(req.body)
            .then(result => {
                res.redirect('/')
            })
            .catch(error => console.error(error))
    })
    app.get('/', (req, res) => {
        db.collection('Basketball').find().toArray()
            .then(results => {
                res.render('index.ejs', { quotes: results })
            })
            .catch( /* ... */ )
    })

})

app.use(bodyParser.urlencoded({ extended: true }))

app.put('/quotes', (req, res) => {
    console.log(req.body)
})

app.listen(3500, () => {
    console.log('On port 3500')
})

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })