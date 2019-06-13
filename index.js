const { readdirSync, readFileSync, existsSync } = require('fs');
const { join } = require('path');
const assert = require('assert');

const dir = join(__dirname, './lib/errors');
const errors = readdirSync(dir)
  .filter(error => error.startsWith('ERR_'))
  .reduce((memo, error) => {
    const docs = [
      join(dir, error, 'README.md'),
      join(dir, error, 'README_zh-CN.md'),
    ];
    assert(
      existsSync(docs[0]) && existsSync(docs[1]),
      `doc ${docs[0]} or ${docs[1]} don't exists.`
    );
    memo[error] = Object.assign(require(join(dir, error)), {
      details: {
        'en': readFileSync(docs[0], 'utf-8'),
        'zh-CN': readFileSync(docs[1], 'utf-8'),
      },
    });
    return memo;
  }, {});

module.exports = errors;
