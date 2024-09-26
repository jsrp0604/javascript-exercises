const convertToCelsius = function(temp) {
  let celciusTemp = (temp - 32) * (5/9);
  let fixedDecimalCelciusTemp = parseFloat(celciusTemp.toFixed(1)) 

  return fixedDecimalCelciusTemp;
};

const convertToFahrenheit = function(temp) {
  let fahrenheitTemp = temp * 9/5 + 32;
  let fixedDecimalFahrenheitTemp = parseFloat(fahrenheitTemp.toFixed(1)) 

  return fixedDecimalFahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
