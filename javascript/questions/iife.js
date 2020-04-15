//IIFE: Immediately Invoked Function Expression
//A function that is executed right after it is created

(function doubleNumber(num) {
    console.log(num * 2)
    return num * 2
})(10);

(function() {
    function getTotal(a, b) {
        return a + b
    }

    var $ = 'currency'

    if (true) {
        console.log('hello world')
    }

    console.log(getTotal(90,10))
})();


function createButtons() {
    for (var i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0]
        var button = document.createElement("BUTTON")
        button.innerHTML = 'Button ' + i;
        (function(num) {
            button.onclick = function() {
                alert('This is button ' + num)
            }
        })(i);
        body.appendChild(button)
    }
}