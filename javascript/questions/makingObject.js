/*
3 sintexes to creat an object
*/

// 1 - object literal syntax
const myBoat = {
    length: 20
}


// 2 - new keyword & object constructor
const student = new Object()
student.name = "moises"


// 3 - constructor function
function Car(color, brand, year) {
    this.color = color
    this.brand = brand
    this.year = year
}

Car.prototype.getColor = function() {
    return this.color
}


var car = new Car("blue", "ferrari", 2015)