
function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
};

const heightFeet = inchToFeet(75);
console.log(heightFeet);

function feetToInch(feet){
    const inch = feet * 12;
    return inch;
}

const heightInch = feetToInch(6);
console.log(heightInch);

// 

function hurayraHeight(inch){
    const feet = parseInt(inch / 12);
    const inchRemaining = inch % 12;
    const result = feet + " ft," + inchRemaining + " inch." ;
    return result;
}
const heightHurayra = hurayraHeight(68);
console.log(heightHurayra);
