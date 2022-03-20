const fibonacci = function(n) {
    let f1 = 1;
    let f2 = 1;
    let result = 0;
    if (n < 1 ){
        return 'OOPS';
    }
    if (n == 1 || n == 2){
        result = 1;
        return result;
    }
    for (let i = 2; i < n; i++) {
        result = f1 + f2;
        f1 = f2;
        f2 = result
    }

    return result
};

// Do not edit below this line
module.exports = fibonacci;
