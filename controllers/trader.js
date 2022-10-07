const Trader = require('../models/trader');

const getHome = async (req, res, next) => {
    res.status(200).send('<h1>home page</h1>');
}

const getTrader = async (req, res, next) => {
    try {
        const trader = await Trader.findAll();
        if (!trader) return res.status(404).send({status: 'Failed', message: 'No record found'});
        return res.status(200).send({status: 'successful', trader: trader}); 
    } catch(error) {
        console.log('error: ', error);
        return res.status(500).send({status: 'Error', message: 'unable to search database'})
    }
}

module.exports = {
    getHome,
    getTrader
}