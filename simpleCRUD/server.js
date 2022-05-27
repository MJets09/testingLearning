const express = require('express');
const res = require('express/lib/response');
const app = express();


app.get('/', (req, res) => {
    res.send('Stay focused')
})



app.listen(3500, function() {
    console.log('Listening to 3500')
})

console.log('May Node be with you')