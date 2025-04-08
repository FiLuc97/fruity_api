const express = require('express') // importing express which is our node framework
const app = express()
const fruits = require('./routes/fruits')


app.get('/', (req, res) => {
    res.send('Hello Fruity') 
})

app.use(express.json())
app.use('/fruits', fruits)

module.exports = app 