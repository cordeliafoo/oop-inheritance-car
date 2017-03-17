// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

var t1 = new Truck('Toyota', '001', 2000, 'black', 4)
assert.strictEqual(t1 instanceof Truck, true, 'you are not a Truck instance')
assert.strictEqual(t1 instanceof Car, true, 'you are not a Car instance')
