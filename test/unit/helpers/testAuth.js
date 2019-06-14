const { describe, it } = require('mocha');
const chai = require('chai');
const bcrypt = require('bcryptjs');
const auth = require('../../../helpers/auth');

const should = chai.should();
process.env.NODE_ENV = 'development';
process.env.TOKEN_SECRET = 'TOKEN_SECRET';

describe('auth', () => {
  describe('comparePass', () => {
    it('should return true if the password is correct', async () => {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('test', salt);
      const results = await auth.comparePass('test', hash);
      should.exist(results);
      results.should.eql(true);
    });

    it('should return false if the password is correct', async () => {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('test', salt);
      const results = await auth.comparePass('testing', hash);
      should.exist(results);
      results.should.eql(false);
    });

    it('should return false if the password empty', async () => {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('test', salt);
      const results = await auth.comparePass('', hash);
      should.exist(results);
      results.should.eql(false);
    });
  });

  describe('decodeToken', () => {
    it('should return a payload', async () => {
      const token = await auth.encodeToken({ id: 1 });
      should.exist(token);
      token.should.be.a('string');
      auth.decodeToken(token, async (err, res) => {
        should.not.exist(err);
        res.sub.should.eql(1);
      });
    });
  });

  describe('encodeToken', () => {
    it('should return a token', async () => {
      const token = await auth.encodeToken({ id: 1 });
      should.exist(token);
      token.should.be.a('string');
    });
  });
});
