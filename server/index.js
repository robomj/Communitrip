const express = require('express');
const cookieParser = require('cookie-parser');
const db = require('./models')
const app = express();
const controllers = require('./controllers')
const port = 8080;
const cors =require('cors')

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST','DELETE', 'OPTIONS']
  }));
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

app.get("/users/auth", controllers.auth);
app.patch('/users/:userId', controllers.editprofile)
app.get('/users/:userId', controllers.getusers)
app.post('/users/login', controllers.login)
app.post('/users/logout', controllers.logout)
app.delete('/users/:userId', controllers.signout)
app.post('/users/signup', controllers.signup)

app.post('/posts/:userId', controllers.createpost) /** 게시물 생성 */
app.delete('/posts/:postId', controllers.deletepost) /** 게시물 삭제 */
app.get('/posts/:postId', controllers.getonepost) /** 하나의 게시물 얻기 */
app.get('/posts', controllers.getallposts) /** 모든 게시물 얻기 */
app.get('/posts/:postId/:userId', controllers.mypost) /** 유저가 좋아요 누른 게시물 */
app.patch('/posts/:postId', controllers.patchpost) /** 게시물 수정 */
app.get('/posts/tags', controllers.tagpost) /** 게시물 태그 얻기 */

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})