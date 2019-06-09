require('dotenv').config();
const mongoose = require('mongoose');
const {
    PORT: port = 4000, //값이 존재하지 않으면 4000이 기본값
    MONGO_URI: mongoURI
}= process.env;

mongoose.Promise = global.Promise; //Node의 Promise를 사용하도록 설정
mongoose.connect(mongoURI).then(() => {
    console.log('connected to mongodb');
}).catch((e)=>{
    console.error(e);
});

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const api = require('./api');

const app = new Koa();
//라우터
const router = new Router();

//라우터 설정
router.use('/api', api.routes()); //api 라우터 적용

//라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());
//ctx : 웹 요청과 응답정보를 지님 / next : 현재 처리 중인 미들웨어의 다음 미들웨어 호출


app.listen(port, ()=>{
    console.log('listening to port', port);
});