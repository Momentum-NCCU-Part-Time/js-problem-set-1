const assert = require('assert')
const { greeting, shout, multigreeting } = require('../functions-with-strings')

describe('functions', function () {
  describe('greeting', function () {
    it('should say hello to Chase', function () {
      assert.equal('Hello, Chase!', greeting('Chase'))
    })
    it('should say hello to Kendall', function () {
      assert.equal('Hello, Kendall!', greeting('Kendall'))
    })
    it('should say hello to Ryan', function () {
      assert.equal('Hello, Ryan!', greeting('Ryan'))
    })
  })

  describe('shout', function () {
    it('should return a string in all caps', function () {
      assert.equal('HELLO, WORLD!', shout('Hello, World!'))
    })
  })

  describe('multigreeting', function () {
    it('should say hello in English', function () {
      assert.equal('Hello, Julian!', multigreeting('Julian', 'en'))
    })
    it('should say hola in Spanish', function () {
      assert.equal('¡Hola, Julian!', multigreeting('Julian', 'es'))
    })
    it('should say hello in French', function () {
      assert.equal('Bonjour, Julian!', multigreeting('Julian', 'fr'))
    })
    it('should say hello in Esperanto', function () {
      assert.equal('Saluton, Julian!', multigreeting('Julian', 'eo'))
    })
    it('should return nothing for languages not supported', function () {
      assert.isUndefined(multigreeting('Julian', 'zz'))
    })
  })
})
