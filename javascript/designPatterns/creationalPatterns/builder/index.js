/*
Intent: Separate the construction of a complex object from its representation so that the same construction process can create different representations
*/

var PersonBuilder = require('./PersonBuilder')

var sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build()
var bill = new PersonBuilder('Sue').makeEmployee().makePartTime().build()
var phil = new PersonBuilder('Sue').makeEmployee().build()

var charles = new PersonBuilder('Charles').withMoney(500).withList(['jeans', 'sunglasses']).build()

console.log(sue.toString())
console.log(charles.toString())