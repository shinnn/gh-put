/*!
 * gh-put | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/gh-put
*/
'use strict';

const ghGet = require('gh-get');

module.exports = function ghPut(url, options) {
  return ghGet(url, Object.assign({}, options, {method: 'PUT'}));
};
