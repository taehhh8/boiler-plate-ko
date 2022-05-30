const express = require('express')
const app = express()
const port = 5002
const bodyParser = require('body-Parser');

const config =require('./config/key');

const { User } =require('./models/User')

// application/x-www-form-urlencoded 이라는 데이터를 분석해서 가져올수 있게해준다.
app.use(bodyParser.urlencoded({extended: true}));
// application/json 타입을 분석해서 가져올수 있게끔 해준다.
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log('MongoDB connected...'))
    .catch(err => console.log(err))
    // console.log('config',config.mongoURI)



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {

    // 회원가입 할때 필요한 정보들을 client에서 가져오면 그것들을 database에 넣어준다.

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

