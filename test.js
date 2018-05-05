const XoXo = require('./index');
const mocha = require('mocha');
const chai = require('chai');

const assert = chai.assert;
describe("Test for XoXo function", () => {
  it("should return a true when 'x' and 'o' are equal", () => {
    assert.equal(XoXo("ooxx"), true);
  });
  it("should return a false when 'x' and 'o' not equal", () => {
    assert.equal(XoXo("xooxx"), false);
  });
  it('should be letter insensitive', () => {
    assert.equal(XoXo('ooxXm'), true);
  });
  it("should return true when no 'x' and 'o' present", () => {
    assert.equal(XoXo('zpzpzpp'), true);
  });
  it("should return true when input is empty string", () => {
    assert.equal(XoXo(''), true);
  });
  it("should return false when either 'x' or 'o' is absent", () => {
    assert.equal(XoXo('zzoo'), false);
  });
  it('should return error message when input is not string', () => {
    assert.equal(XoXo(89), 'Error: input should be a string');
  });
});
