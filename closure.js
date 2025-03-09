

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.


function sum (){
    let counter = 0;
    return function () {
        counter ++;
        return counter;
    }
}

const result = sum();

console.log(result());
console.log(result());
console.log(result());
console.log(result());

const result2 = sum();

console.log(result2());
console.log(result2());
console.log(result2());
console.log(result2());