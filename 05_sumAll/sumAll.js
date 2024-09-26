const sumAll = function(firstInt, secondInt) {
    let finalSum = 0;

    let isNegative = firstInt < 0 || secondInt < 0;
    let isInt = Number.isInteger(firstInt) && Number.isInteger(secondInt);
    let isNumber = (typeof firstInt == "number") && (typeof secondInt == "number");  

    if (isNegative || !isInt || !isNumber) return 'ERROR';

    if (firstInt > secondInt) {
        let temp = firstInt;
        firstInt = secondInt;
        secondInt = temp;
    }

    for (let i = firstInt; i <= secondInt; i++) {
        finalSum += i;
    }

    return finalSum;
};

console.log(sumAll(2.5, 4));

// Do not edit below this line
module.exports = sumAll;
