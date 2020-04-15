/*
Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have typeof string

collectStrings(obj) // ["foo", "bar", "baz"])
*/

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectString(obj) { //help method version
    var stringsArr = []

    function gatherStrings(o) {
        for (let key in o) {
            if (typeof o[key] === 'string') {
                stringsArr.push(o[key])
            } else if (typeof o[key] === 'object') {
                return gatherStrings(o[key])
            }
        }
    }

    gatherStrings(obj)

    return stringsArr
}

function collectString(obj) { //pure recursion
    var stringsArr = []

    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            stringsArr.push(obj[key])
        } else if (typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectString(obj[key]))
        }
    }

    return stringsArr
}

console.log(collectString(obj))

