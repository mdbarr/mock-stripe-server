'use strict';

describe('Basic Spec', () => {
  describe('Token Test', () => {
    it('Create a token', () => stripe.tokens.create({ card: stripe.util.getDefaultCreditCard() }));
  });
});
