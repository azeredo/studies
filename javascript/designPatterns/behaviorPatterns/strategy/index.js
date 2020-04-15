/*
Intent: Define a family of algorithms, encapsulate each one, and make them interchangeable. 
        Strategy lets the algorithm vary independently from clients that use it
*/
var logger = require('./Logger')

logger.log('Hello World')
logger.log('Hi World')
logger.log('Yo World')

logger.changeStrategy('toFile')

logger.log('Hello World')
logger.log('Hi World')
logger.log('Yo World')

logger.changeStrategy('toMorseCode')
logger.log('SOS')