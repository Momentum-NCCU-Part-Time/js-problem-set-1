const assert = require('assert')
const {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  fahrenheitToKelvin,
} = require('../temperature-conversions')

describe('temperature conversions', function () {
  describe('fahrenheitToCelsius', function () {
    it('32 F should equal 0 Celsius', function () {
      assert.equal(0, fahrenheitToCelsius(32))
    })
    it('212 F should equal 100 Celsius', function () {
      assert.equal(100, fahrenheitToCelsius(212))
    })
    it('77 F should equal 25 Celsius', function () {
      assert.equal(25, fahrenheitToCelsius(77))
    })
  })

  describe('celsiusToFahrenheit', function () {
    it('0 C should equal 32 F', function () {
      assert.equal(32, celsiusToFahrenheit(0))
    })
    it('100 C should equal 212 F', function () {
      assert.equal(212, celsiusToFahrenheit(100))
    })
    it('25 C should equal 77 F', function () {
      assert.equal(77, celsiusToFahrenheit(25))
    })

    it('fahrenheitToCelsius(celsiusToFahrenheit(x)) should equal x', function () {
      for (var i = 0; i < 100; i++) {
        var x = Math.random() * 1000 - 500
        assert.closeTo(x, fahrenheitToCelsius(celsiusToFahrenheit(x)), 0.001)
        assert.closeTo(x, celsiusToFahrenheit(fahrenheitToCelsius(x)), 0.001)
      }
    })
  })

  describe('fahrenheitToKelvin', function () {
    it('32 F should equal 273.15 K', function () {
      assert.equal(273.15, fahrenheitToKelvin(32))
    })
    it('212 F should equal 373.15 K', function () {
      assert.equal(373.15, fahrenheitToKelvin(212))
    })
    it('-400 F should equal 33.15 K', function () {
      assert.closeTo(33.15, fahrenheitToKelvin(-400), 0.001)
    })
  })
})
