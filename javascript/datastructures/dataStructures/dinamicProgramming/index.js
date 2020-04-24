function fib(n) {
    if (n <= 2) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}
//Big O (2^n)
function fibMemo(n, memo = [undefined, 1, 1]) {
    if (memo[n] !== undefined) {
        return memo[n]
    }
    
    if (n <= 2) {
        return 1
    }
    var result =  fibMemo(n - 1, memo) + fibMemo(n - 2, memo)
    memo[n] = result
    return result
}
//Big O (n)

function fibTab(n) {
    if (n <= 2) {
        return 1
    }
    var fibNums = [0, 1, 1]
    for (var i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
    }
    return fibNums[n]
}


//console.log('fib',fib(40))
//console.log('fibmemo',fibMemo(10000))
console.log('fibTab',fibTab(10000))