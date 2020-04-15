/*
Descrive the javascript call() and apply() methods

1 - How do they function?
2 - What arguments do the take?
3 - How are they different?
*/
const car1 = {
    brand: 'Porsch',
    getCarDescription: function(cost, year, color) {
        console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`)
    }
}

const car2 = {
    brand: 'Lamborghini'    
}

const car3 = {
    brand: 'Ford'
}

// call()
car1.getCarDescription(8000, 2010, 'blue')
car1.getCarDescription.call(car2, 200000, 2013, 'yellow')


//apply()
car1.getCarDescription.apply(car3, [35000, 2013, 'black'])