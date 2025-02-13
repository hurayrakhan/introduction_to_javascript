
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


