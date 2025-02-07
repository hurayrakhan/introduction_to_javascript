// Array

// array sintax 
// an array is stored between = [] third bracket


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const strings = ["hurayra", "miskat", "runu", "tuktuki", "rukaiya", "raihan"];
const mixed = [1, "mango", 8, "lichi", true, false];

// Each of the values ​​has an index associated with it
// example:

// const strings = ["hurayra", "miskat", "runu", "tuktuki", "rukaiya", "raihan"]
// index of those value is  [0, 1, 2, 3, 4, 5]
//             0 = "hurayra"
//             1 = "miskat"
//             3 = "runu"


// to change a value of an index

const names = ["hurayra", "miskat", "runu"];
names[0] = "raihan";

console.log(names);

// to track a value by its index

console.log(names[1]);


// to know how many data in the variable

console.log(numbers.length);
console.log(strings.length);
console.log(mixed.length);
// t