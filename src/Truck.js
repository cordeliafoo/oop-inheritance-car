var Car = require('./Car.js')

// Implement your Truck here
function Truck (make, model, year, color, passengers, seats = 3) {
  Car.call(this, make, model, year, color, passengers, seats)
}

Truck.prototype = Object.create(Car.prototype)
Truck.prototype.constructor = Truck

module.exports = Truck
