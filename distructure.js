const hurayra = {
    name : "hurayra khan",
    age : 24, 
    education: "hons 3rd"
}
// generally we found the value of an object by
// const name = hurayra.name;
// const age = hurayra.age:

// but this method is not so friendly 
// we can use object distruction method 

const {name, age, education} = hurayra;
console.log(name);
console.log(education);



// we also distruct an array by the distruction method
const friends = ["hurayra", "miskat", "raihan",{father:"rezaul islam", mother: "shuly khatun"}];

// lets distruct the array 
const [me, bigBro, littleBro, parents] = friends;

console.log(me, bigBro, littleBro, parents);

