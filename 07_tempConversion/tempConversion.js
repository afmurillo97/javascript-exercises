const ftoc = function(fahrenheit) {
  let result = parseFloat((fahrenheit - 32) * 5/9);
  let number = parseFloat(result.toFixed(1));
  return number;
};

const ctof = function(celcius) {
  let result = parseFloat(celcius * 9/5 + 32);
  let number = parseFloat(result.toFixed(1));
  return number;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
