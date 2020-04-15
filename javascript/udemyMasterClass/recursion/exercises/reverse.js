/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse
*/
function reverse(str) {
    if (str === "") {
        return ""
    }

    return  str[str.length - 1] + reverse(str.substr(0, str.length - 1))
}