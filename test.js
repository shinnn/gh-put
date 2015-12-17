'use strong';

const ghPut = require('.');
const test = require('tape');

process.env.GITHUB_TOKEN = '';

test('ghPut()', t => {
  t.plan(2);

  t.equal(ghPut.name, 'ghPut', 'should have a function name.');

  ghPut('lipsum', {
    headers: {
      'user-agent': 'Shinnosuke Watanabe https://github.com/shinnn'
    },
    verbose: true,
    token: process.env.TOKEN_FOR_TEST
  }).then(t.fail, err => {
    t.strictEqual(err.response.request.method, 'PUT', 'should create a PUT request.');
  }).catch(t.fail);
});
