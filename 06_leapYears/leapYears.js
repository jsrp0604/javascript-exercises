const leapYears = function(year) { 

    // Must be divisible by 4, divisible by 100 if and only if divisible by 400
    if (year % 4 == 0)  {
        if (year % 100 == 0) {
            if (year % 400 == 0) 
                return true;
            return false;  
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
