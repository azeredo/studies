/*
What is logged out for each console.log statement?
*/
console.log(typeof null) //object
console.log(typeof undefined) //undefined
console.log(typeof {}) //object
console.log(typeof []) //object

console.log(Array.isArray([]))
console.log(Array.isArray({}))
console.log([] instanceof Array)
console.log({} instanceof Array)