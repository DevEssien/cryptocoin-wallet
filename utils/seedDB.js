const axios = require('axios');
const Trader = require('../models/trader');

const apiCall = async () => {
    const url = 'https://api.wazirx.com/api/v2/tickers';
    const response = await axios.get(url);
    const results = response.data;
    const keys = Object.keys(results);

    keys.forEach(async (result, index) => {
        if (keys.indexOf(result) < 10) {
            const req = results[result];
            const trader = await Trader.create({
                name: req.name,
                last: req.last,
                buy: req.buy,
                sell: req.sell,
                volume: req.volume,
                base_unit: req.base_unit
            });
        }
        return;   
    });
};

module.exports = apiCall;