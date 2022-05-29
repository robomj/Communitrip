const express = require('express');
const cookieParser = require('cookie-parser');
const db = require('./models')
const app = express();
const port = 8080;

db.sequelize.sync().then(() => {
    console.log('db 연결 성공')
}).catch((err) => {
    console.log('err')
})

app.use(express())
app.use(cookieParser()); /** 요청된 쿠키를 추출하기 위한 미들웨어 req의 cookies속성 부여 */

app.get('/', (req, res) => {
    res.json("hello world")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})