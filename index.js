const express = require('express');
const app = express()
const port = 5000

const cors = require('cors');
const data = require('./data/friends.json');

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('data')
})

app.get('/friends', (req, res) => {
    res.send(data)
})

app.post('/friends', (req, res) => {
    console.log('post');
    console.log(req.body);
    const newUser = req.body
    newUser.id = data.length + 1
    data.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
    console.log(port);
})