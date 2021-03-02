const { Router } = require('express');
const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
let indexCtrl = require('../controller/indexCrtl')
ROUTER.post('/login', indexCtrl.login) //登录
ROUTER.get('/getInfo',indexCtrl.getInfo)


// lemmo
ROUTER.get('/discountList',indexCtrl.getDiscountList)
module.exports = ROUTER;