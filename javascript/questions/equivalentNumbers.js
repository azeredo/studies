console.log(900.9 === 3 * 300.3) //false 
console.log(900.9 === Number((3 * 300.3).toFixed(2))) //false

console.log(300.3 * 3)
console.log((300.3 * 3).toFixed(2))
console.log((300.3 * 3).toPrecision(12))