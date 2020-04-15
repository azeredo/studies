//function getProdut(num1, num2) {
//  return num1 * num2
//}

function getProdut(num1) {
    return function(num2) {
        return num1 * num2
    }
}

getProdut(10)(20)

//function getTravelTime(distance, speed) {
//    return distance / speed
//}

//getTravelTime(600, 50)
//getTravelTime(600, 80)
//getTravelTime(600, 60)



function getTravelTime(distance) {
    return function(speed) {
        return distance / speed
    }
}

const travelTimeBosNyc = getTravelTime(400)
const travelTimeMiamiAtlanta = getTravelTime(600)

console.log(travelTimeBosNyc(50))
console.log(travelTimeBosNyc(60))
console.log(travelTimeBosNyc(80))

console.log(travelTimeMiamiAtlanta(80))