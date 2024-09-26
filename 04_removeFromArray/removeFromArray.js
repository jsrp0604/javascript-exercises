const removeFromArray = function(array, ...args) {
    const argumentsArray = Array.from(args); 

    let newArray = array.filter((element) => !argumentsArray.includes(element));
    
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
