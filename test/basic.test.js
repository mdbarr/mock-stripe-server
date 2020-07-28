'use strict';

const stripe = require('./stripe');

describe('Basic Spec', () => {
  beforeAll((done) => {
    stripe.boot(done);
  });

  describe('Token Test', () => {
    it('Create a token', async () => {
      const token = await stripe.tokens.create({ card: stripe.util.getDefaultCreditCard() });
      expect(token).toHaveProperty('object', 'token');
    });
  });

  afterAll((done) => {
    stripe.shutdown(done);
  });
});
