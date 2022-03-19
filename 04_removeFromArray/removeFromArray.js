const removeFromArray = function() {
    let evaluatedArray = [];
    let parameters = [];
    for (let i = 0; i < arguments.length; i++) {
        if (i == 0){
            evaluatedArray = arguments[i];
        } else {
            parameters.push(arguments[i]);
        }
    }
    let cont  = parameters.length
    while (cont > 0){
        for (let i = 0; i < evaluatedArray.length; i++) {
            if (evaluatedArray[i] === parameters[cont-1]){
                evaluatedArray.splice(i,1)
            }
        }
    cont--;
    }
    return evaluatedArray;
};

// Do not edit below this line
module.exports = removeFromArray;


//removeFromArray([1, 2, 3, 4], 3)

//toEqual([1, 4])