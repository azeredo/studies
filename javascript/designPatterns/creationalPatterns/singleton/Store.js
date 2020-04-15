var logger = require('./Logger')

class Store {
    constructor(name, invetory = []) {
        this.name = name
        this.invetory = invetory
        logger.log(`New Store: ${name} has ${invetory.length} items in stock.`)
    }
}

module.exports = Store