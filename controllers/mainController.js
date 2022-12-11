'use strict';

const mainServicesClass = require("../services/mainServices.js");
const mainService = new mainServicesClass();

module.exports = class MainController {
    constructor() {}

    WelcomePage(req, res) {
        return res.status(200).json(mainService.sayWelcome());
    }

}