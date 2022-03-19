const reverseString = function(string) {
    let arrayString = [];
    for (let i = 0; i < string.length; i++) {
        arrayString.push(string.slice(i, i + 1))
    }
    let reverseString = arrayString.reverse();
    let result = reverseString.join('')
    return result;
};

// Do not edit below this line
module.exports = reverseString;
