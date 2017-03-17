// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle')
var Car = require('../src/Car')

var m1 = new Motorcycle('Hyundai', 'Speedy1000', 2008, 'red', 2)
assert.strictEqual(m1 instanceof Motorcycle, true, 'you are not a Motorcycle instance')
assert.strictEqual(m1 instanceof Car, true, 'you are not a Car instance')

// Testing wheelie()
console.log('Testing wheelie now')
assert.equal(typeof (m1.wheelie), 'function', 'there is no wheelie function')
assert.strictEqual(typeof (m1.wheelie()), 'boolean', 'park function did not return a boolean value')
m1.start()
assert.strictEqual(m1.wheelie(), true, 'Motorcycle did not do wheelie even though it was running')
m1.off()
assert.strictEqual(m1.wheelie(), false, 'Car did wheelie even though it was NOT running')
