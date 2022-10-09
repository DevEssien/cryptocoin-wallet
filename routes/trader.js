const express = require('express');

const { getTrader, getHome } = require('../controllers/trader');

const router = express.Router();

router.get('/', getHome);

router.get('/trader', getTrader)

module.exports = router;

/*
    visit the /trader route to get the data on the browser
 */