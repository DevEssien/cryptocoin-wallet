const express = require('express');

const { getTrader, getHome } = require('../controllers/trader');

const router = express.Router();

router.get('/', getHome);

router.get('/trader', getTrader)

module.exports = router;