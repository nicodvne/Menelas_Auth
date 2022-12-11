'use strict';
const express = require('express');

module.exports = class MainServices {
    constructor () {
    }

    sayWelcome() {
        return {"message": "Welcome everyone"};
    }
}