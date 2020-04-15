/*
Describe what variable and funcion hoisting is and how it works
var (function scoped) => global, function
const, let (block scoped) => global, function and block

Variables and functions are hoisted to the top of the scope that they are declared in
*/
console.log(color);
 
var color = "blue";
 
console.log(color);
 
 
 

// 
var color;
 
console.log(color);
 
color = "blue";
 
console.log(color);
 
 
 
// 
console.log(getProduct(2, 3));
 
var getProduct = function(num1, num2) {
  return num1 * num2;
};
 
console.log(getProduct(2, 3));
 
 
 
// 
console.log(getProduct(2, 3));
 
function getProduct(num1, num2) {
  return num1 * num2;
}
 
 
 
// 
var globalVar = 'global';
 
(function() {
  
  var name = 'Jen';
  
  var getAge = function() {
    return '30';
  };
  
  function getState() {
    return 'Delaware'; 
  }
  
})();