// simple:
// if a year is divisable by 4 is a leap year

function leapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLeapYear = leapYear(2023);
console.log(isLeapYear);

// exact logic:
// 1. those year that is not divisable by 100 but divisable by 4 then that will be a leapyear.
// 2. 


function trueLeapYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    return false;   
}

const isLeapYear1 = trueLeapYear(2024);
const isLeapYear2 = trueLeapYear(2025);
const isLeapYear3 = trueLeapYear(2026);
const isLeapYear4 = trueLeapYear(2027);
const isLeapYear5 = trueLeapYear(2028);

console.log(isLeapYear1, isLeapYear2, isLeapYear3, isLeapYear4, isLeapYear5);