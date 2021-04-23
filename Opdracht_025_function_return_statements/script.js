/* Checking if a number is big */
const bigNumber = function (number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
};

const result = bigNumber(99);
// console.log(result);

/* Bouncer at a club */
const entrance = function (people, age) {
    let result;
    if (people > 500 && age >= 18) {
        result = "It's too busy now, come back later";
    } else if (people >= 500 && age < 18) {
        result = 'This is a club for adults';
    } else if (people < 500 && age < 18) {
        result = 'This is a club for adults';
    } else {
        result = 'Come in';
    }
    return result;
};

// console.log(entrance(456, 19));
// console.log(entrance(501, 56));
// console.log(entrance(290, 16));
// console.log(entrance(623, 18));
// console.log(entrance(542, 17));

/* Calculating the average */
const calculateAverage = function (numbers) {
    const average = numbers.reduce((total, n) => total + n) / numbers.length;
    return average;
};

const result1 = calculateAverage([6, 7, 2, 9, 5]);
const result2 = calculateAverage([1, 2.5, 3.6, 9, 18]);
const result3 = calculateAverage([66, 76, 86, 96, 23]);
console.log(Math.round(result1));
console.log(Math.round(result2));
console.log(Math.round(result3));
