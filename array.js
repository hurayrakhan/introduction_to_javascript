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


// Array push
// to push elments in an array we can use array push

const friends = ["hurayra", "miskat", "runu"];
console.log(friends);
friends.push("tuktuki", "rukaiya", "raihan");
console.log(friends)

// to remove and add an element we can use 
//   1. to add last of the array  =  push()
//   2. to remove last element of the array =  pop()

friends.pop()
console.log(friends)

//   3. to add an element first in an array = unshift()
//   4. to remove an elements first of an array = shift()

friends.unshift("rezaul");
console.log(friends);

friends.shift();
console.log(friends);

// to cheak any elements is present or not in an array

const dalls = ["doremon", "pokemon", "teddy"];

console.log(dalls.includes("doremon"));
console.log(dalls.includes("doggy"));

// to find index number of an element

console.log(dalls.indexOf("teddy"));

// if an element not present in an array then show the index number "-1"

console.log(dalls.indexOf("doggy"));



// to cheak a variable is an array or not

console.log(Array.isArray(dalls));
console.log(Array.isArray(friends));

const age = 24;
const dateOfBirth = "october";

console.log(Array.isArray(age));
console.log(Array.isArray(dateOfBirth));

// dalls.join("+");  "+" "|" 
// to concat two array we can use data1.concat(data2);
// slice(); to slice a piece of data
// splice();
// 




