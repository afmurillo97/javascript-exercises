const sumAll = function(a, b) {
    let result = 0;
    if ((a < 0 || b < 0) || (typeof a !== 'number' || typeof b !== 'number')) {
        return 'ERROR';
    }
    else if (a < b){
        for (let i = 1; i <= b; i++) {
            result += i
        }
    } else {
        for (let i = 1; i <= a; i++) {
            result += i
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
