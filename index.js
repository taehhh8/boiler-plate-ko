const express = require('express')
const app = express()
const port = 5002

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://taehyun:5679@boilerplate.jwi6y2b.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log('MongoDB connected...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

