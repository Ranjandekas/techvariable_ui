const express = require("express");
const router = express.Router();
var taskcontroller = require('../controller/controller');



router.get('/task', taskcontroller.getall)
        .post('/task', taskcontroller.save)

module.exports = router;