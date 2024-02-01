const assert = require('assert')
const { isOdd, isEven, lesser } = require('../functions-with-numbers')

describe('functions with numbers', function () {
  describe('isOdd', function () {
    it('should say 3 is odd', function () {
      assert.equal(true, isOdd(3))
    })
    it('should say 10 is not odd', function () {
      assert.equal(false, isOdd(10))
    })
    it('should say -13 is odd', function () {
      assert.equal(true, isOdd(-13))
    })
    it('should say 5.5 is not odd', function () {
      assert.equal(false, isOdd(5.5))
    })
  })

  describe('isEven', function () {
    it('should say 3 is not even', function () {
      assert.equal(false, isEven(3))
    })
    it('should say 10 is even', function () {
      assert.equal(true, isEven(10))
    })
    it('should say -12 is even', function () {
      assert.equal(true, isEven(-12))
    })
    it('should say 4.4 is not even', function () {
      assert.equal(false, isEven(4.4))
    })
  })

  describe('lesser', function () {
    it('should return 1 from 1 and 2', function () {
      assert.equal(1, lesser(1, 2))
      assert.equal(1, lesser(2, 1))
    })
    it('should return -1 from -1 and 1', function () {
      assert.equal(-1, lesser(-1, 1))
      assert.equal(-1, lesser(1, -1))
    })
  })
})
