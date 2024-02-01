const assert = require('assert')
const {
  givenName,
  rainbow,
  candies,
  people,
  leftover,
} = require('../variables')

describe('variables', function () {
  describe('givenName', function () {
    it('should equal Addison', function () {
      assert.equal('Addison', givenName)
    })
  })

  describe('rainbow', function () {
    it('should equal an array of the seven colors of the rainbow in order according to ROYGBIV', function () {
      assert.deepEqual(
        ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
        rainbow
      )
    })
  })

  describe('candies', function () {
    it('should equal 20', function () {
      assert.equal(20, candies)
    })
  })

  describe('people', function () {
    it('should equal 6', function () {
      assert.equal(6, people)
    })
  })

  describe('leftover', function () {
    it('should equal 2', function () {
      assert.equal(2, leftover)
    })
  })
})
