/*
Intent: Avoid coupling the sender of a request to its receiver by giving more than one object a change to handle the requrest.
        Chain the receiving objects and pass the request alogn the chain.
*/
var Store = require('./Store')
var inventory = require('./inventory')

var skiShop = new Store('Steep and Deep', inventory)

var searchItem = 'powder ski'
var results = skiShop.find(searchItem)

console.log(results)