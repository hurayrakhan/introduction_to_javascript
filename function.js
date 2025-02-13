
// structure of a function
// function name(){}
//  1. keyword = function
//  2. function name = sum, ....
//  3. () = (parameter1, parameter2, ...)
//  4. {} = {function body...instruction
//            
//          console.log();
//          return "result"
//          }
//Example:
function doubleIt(number){
    double = number * 2;

    console.log(double);
}
// function call
// doubleIt(15) = argument

doubleIt(15)


// we can use a variable as the argument of a function
// example
function addition(num1, num2){
    add = num1 + num2;
    console.log(add);
}
const x = 20;
const y = 12;
// call function
addition(x, y);

// ******************return****************

function sum(x, y){
    const result = x + y;
    return result;    
}
// function call

const total = sum(5, 3);
console.log(total);


// other one

function fanOff() {
    console.log("utho");
    console.log("switch er kache jaw");
    console.log("click the switch");
    return "fan off"
      
}
// call the function

const result = fanOff();
console.log(result);


// conditional return

function isEven(number){
    if (number % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(8));

function isOdd(number){
    if (number % 2 === 1){
        return true;
    }
    return false;
}
console.log(isOdd(6));


// string function

function string(str){
    const size = str.length;
    console.log(str, size);


}

string("hurayra");


// boolean function

function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const double = number * 2;
        return double
    }
    else{
        const triple = number * 3;
        return triple;
    }
}

console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));



// function of array 


function sumOfNumbers(numbers){
    let sum = 0;
    for(const num of numbers){
        console.log(num);
        sum = sum + num;
    }
    return sum;
}
const numbers = [5, 9, 12, 18, 20];
const Total = sumOfNumbers(numbers);
console.log(Total);


