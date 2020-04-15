/*
Intent: Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality
*/

var Shopper = require('./Shopper')
var { InventoryItem, GoldenInventoryItem, DiamondInventoryItem }  = require('./InventoryItem')

var alex = new Shopper("Alex", 3000)
var walkman = new InventoryItem("Walkman", 29.99)

var neclace = new InventoryItem("Neclace", 9.99)

var gold_neclace = new GoldenInventoryItem(neclace)
var diamand_gold_neclace = new DiamondInventoryItem(gold_neclace)
var diamand_walkman = new DiamondInventoryItem(walkman)

alex.purchase(gold_neclace)
alex.purchase(diamand_gold_neclace)
alex.purchase(diamand_walkman)

alex.printStatus()

diamand_walkman.print()