const repeatString = function(string, nTimes) {
    let finalString = '';
    
    if (nTimes < 0 ) return 'ERROR';

    for (let i = 0; i < nTimes; i++) {
        finalString = finalString + string;
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
