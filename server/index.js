const express = require('express');
const cookieParser = require('cookie-parser');
const db = require('./models')
const app = express();
const controllers = require('./controllers')
const port = 8080;

db.sequelize.sync().then(() => {
    console.log('db 연결 성공')
}).catch((err) => {
    console.log('err')
})

app.use(express.json())
app.use(express.urlencoded({ extended: false })); /** 클라이언트 body 해석 위함 */
app.use(cookieParser()); /** 요청된 쿠키를 추출하기 위한 미들웨어 req의 cookies속성 부여 */

app.get('/', (req, res) => {
    res.json("hello world")
})
app.patch('/users/:userId', controllers.editprofile)
app.get('/users/:userId', controllers.getusers)
app.post('/users/login', controllers.login)
app.post('/users/logout', controllers.logout)
app.delete('/users/:userId', controllers.signout)
app.post('/users/signup', controllers.signup)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})