const palindromes = function (str) {
    let regex = /[^\w\s]+/;

    let filteredStr = str.split("").filter(char => !char.match(regex) && char != " ").join("").toLowerCase();
    let reversedStr = filteredStr.split("").reverse().join("");

    return filteredStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
