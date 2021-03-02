// 搭建环境
const EXPRESS = require('express');
const LOGGER = require('morgan'); //日志
const FAVICON = require('serve-favicon');
const cors = require("cors");
// ----
const EXPRESSJWT = require(`express-jwt`);
// ------
const BODYPARSER = require('body-parser');
const ROUTER = require('./router/router');
// 实例化对象
const MYAPP = EXPRESS();
MYAPP.use(cors({
 "origin": "*",
 "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
 "preflightContinue": false,
 "optionsSuccessStatus": 204
}))
// 配置日志
MYAPP.use(LOGGER('dev'));
// post解析
MYAPP.use(BODYPARSER.urlencoded({extended: false}));
MYAPP.use(BODYPARSER.json());
// 配置路由
MYAPP.use(ROUTER);
// 静态资源
MYAPP.use(EXPRESS.static(__dirname + '/src'));
MYAPP.use(FAVICON(__dirname + '/src/images/1.jpg'));
// 监听端口
MYAPP.listen(6789, () => console.log('服务器已启动'));