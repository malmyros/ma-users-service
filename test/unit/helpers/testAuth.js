process.env.NODE_ENV = 'test';

const auth = require('../../../helpers/auth');

describe('auth', () => {
  describe('encodeToken()', () => {
    it('should return a token', async () => {
      const token = await auth.encodeToken({ id: 1 });
      should.exist(token);
      token.should.be.a('string');
    });
  });
});
