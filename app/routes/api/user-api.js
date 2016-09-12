var express = require("express");
var router = express.Router();

var userController = require("../../controllers/user-controller.js");


router.post('/login/wechat', userController.loginByWechat);


module.exports = router;