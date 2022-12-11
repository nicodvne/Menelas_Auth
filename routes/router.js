const express = require('express');
const router = express.Router();

const mainControllerObj = require("../controllers/mainController.js");
const mainController = new mainControllerObj;

router.get('/', (req, res) => mainController.WelcomePage(req, res));

module.exports = router;