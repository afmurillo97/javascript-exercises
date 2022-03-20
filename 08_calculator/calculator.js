const add = function(a, b) {
	let result = a + b;
  return result;
};

const subtract = function(a, b) {
	let result = a - b;
  return result;
};

const sum = function(array) {
	let result = 0;
  for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
  return result;
};

const multiply = function(array) {
	let result = 1;
  for (let i = 0; i < array.length; i++) {
      result *= array[i];
    }
  return result;
};

const power = function(a, b) {
	let result = a;
  for (let i = 0; i < b-1; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(number) {
  let result = 1;
  let cont = number;
  if (number === 0){
    return 1;
  }
  for (let i = cont; i > 1 ; i--) {
    result *= i-1
  }
  return result * number;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
