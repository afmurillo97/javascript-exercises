const palindromes = function (string) {
    // delete from string all specials characters, '\b'  clear the white space
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet 
    let clearString = (string.replace(/[^\ba-zA-Z]/g, ''));
    let result = clearString.toLowerCase();

    let arrayString = [];
    for (let i = 0; i < result.length; i++) {
        arrayString.push(result.slice(i, i + 1));
    }
    let reverseString = arrayString.reverse()
    let reverse = reverseString.join('');
    
    if (reverse === result){
        return true;
    } else {
        return false;
    }


};

// Do not edit below this line
module.exports = palindromes;
