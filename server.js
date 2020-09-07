const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const Order = require('./schema-models/order.model')
const PointsMapping = require('./schema-models/points-mapping.model');
const Product = require('./schema-models/product.model');
const Shop = require('./schema-models/shop.model');
const Type = require('./schema-models/type.model');

const app = express();
const router = express.Router();
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

var checkJwt = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.DB_CONNECTION);
const connection = mongoose.connection;

connection.once('open', () => console.log('MongoDB connection establised.'));

const port = process.env.PORT;
app.set('port', port);

router.route('/api/orders/add').post(checkJwt,(req, res) => {
    let order = new Order(req.body);
    order.save().then(() => 
    res.json({status: 200})).catch((err) => res.json({error: err, status: 400}));
});

router.route('/api/points-mappings').get(checkJwt, (req,res) => {
    PointsMapping.find((err, mapping) => {
        err ? res.json({error: err, status: 400}) : res.json(mapping); 
    });
});

router.route('/api/shop').get(checkJwt,(req, res) => {
    Shop.find().populate({path:'shop', populate: {path: 'products'}}).exec((err, shop) => {
        err ? res.json({error: err, status: 400}) : res.json(shop);
    });
});

app.use('/', router);

if (process.env.NODE_ENV !== 'dev') {
    app.use('/', express.static(path.join(__dirname, './dist/front-end')));
}

if (process.env.NODE_ENV !== 'dev') {
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '/dist/front-end/index.html'));
    });
}

app.listen(port, () => console.log('Express server running.'));