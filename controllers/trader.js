const Trader = require('../models/trader');

const getHome = async (req, res, next) => {
    res.render('index');
}

const getTrader = async (req, res, next) => {
    try {
        const traders = await Trader.findAll();
        if (!traders) return res.status(204).send({ message: 'No record found' });
        res.render('trader', { traders: traders });
    } catch(error) {
        console.log('error: ', error);
        return res.status(500).send({status: 'Error', message: 'unable to search database'})
    }
}

module.exports = {
    getHome,
    getTrader
}