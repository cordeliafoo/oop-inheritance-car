var Car = require('./Car.js')

// Implement your Motorcycle here
function Motorcycle (make, model, year, color, passenger, seat = 2) {
  Car.call(this, make, model, year, color, passenger)
}

Motorcycle.prototype = Object.create(Car.prototype)
Motorcycle.prototype.constructor = Motorcycle

// * Must be able to do a wheelie by calling `wheelie()`, but only if running.
//   * If the wheelie is successful,
//   * return true and `console.log` the following: `"Doing a sick wheelie!!"`. Otherwise return false.
//   * This function should be attached to `Motorcycle.prototype`.

var m1 = new Motorcycle('Hyundai', 'Speedy1000', 2008, 'red', 2)

Motorcycle.prototype.wheelie = function () {
  if (m1.start) {
    console.log('Doing a sick wheelie!!')
    return true
  } else if (m1.off) {
    return false
  }
}

module.exports = Motorcycle
