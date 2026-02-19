const assert = require('node:assert');
const test = require('node:test');
const soma = require('../src/soma');

test('deve somar 2 + 3 e retornar 5', () => {
  assert.strictEqual(soma(2, 3), 5);
});