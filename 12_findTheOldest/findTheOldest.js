const findTheOldest = function(array) {
    let greatestAge = 0;
    let oldestPerson;

    array.forEach(person => {
        if (person.yearOfDeath === undefined)  {
            person.yearOfDeath = new Date().getFullYear();
        }

        let age = person.yearOfDeath - person.yearOfBirth; 

        if (age > greatestAge) {
            greatestAge = age;
            oldestPerson = person;
        }
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
