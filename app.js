const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 8080;

const traderRoute = require('./routes/trader');
const Trader = require('./models/trader');
const apiCall = require('./utils/seedDB');

app.use(traderRoute);
app.use(bodyParser.urlencoded({extended: true}));

const tableSync = async () => {
    const createTrader = await Trader.sync();
    console.log('created trader');
};

//uncomment and run once to create trader table in mysql db and seed it
// tableSync();
// apiCall();

app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found!');
});

app.listen(port, () => {
    console.log(`server spinning at port ${port}`);
});
