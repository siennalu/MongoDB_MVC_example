var express = require('express');
var router = express.Router();

const User = require('../controllers/users_controller');

let user = new User();

router.post('/insert', user.insertUser);//create

router.get('/search', user.retrieveUser);//read

router.put('/update', user.updateUser);//update

module.exports = router;

//檔名的部分e.g. xxx_controller.js     xxx_model.js
//變數命名 駝峰式命名e.g. userName userPassword
//Class 首字母大寫 e.g. Class Member { }

/*
CRUD -> Create Read Update Delete
REST -> POST GET PUT DELETE
口語上 -> 增查改刪
 */