// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require('./program');
const chai = require('chai');

it('Test Case #1', function () {
  const input = [5, 7, 1, 1, 2, 3, 22];
  const expected = 20;
  const actual = program.nonConstructibleChange(input);
  chai.expect(actual).to.deep.equal(expected);
});
