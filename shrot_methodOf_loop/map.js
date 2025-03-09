// map function is a short form of loop[s]

const numbers = [1, 2 , 3,4,5 ,6];

const squre = numbers.map(element => element * element);
const cube = numbers.map(element => {
    return element * element * element;
})

console.log(squre);
console.log(cube);

