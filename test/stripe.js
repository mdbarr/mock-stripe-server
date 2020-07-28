'use strict';

const StripeServer = require('../lib/stripeServer');
const stripeServer = new StripeServer();

const stripeSecretKey = 'sk_test_this_is_a_test_key';

let stripe;

if (process.env.STRIPE_SECRET_KEY) {
  stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  stripe.boot = (callback) => setImmediate(callback);
  stripe.shutdown = (callback) => setImmediate(callback);
} else {
  stripe = require('stripe')(stripeSecretKey);

  stripe._api.protocol = 'http';
  stripe._api.host = 'localhost';
  stripe._api.port = '5757';

  stripe.boot = (done) => {
    stripeServer.boot(done);
  };

  stripe.shutdown = (done) => {
    stripeServer.close(done);
  };
}

stripe.util = stripeServer.util;
stripe.data = stripeServer.data;

module.exports = stripe;
