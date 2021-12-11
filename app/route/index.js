const express = require('express');
const router = express.Router();

const IndexController = require('../controller/IndexController');

router.get("/", IndexController.get);

module.exports = router;