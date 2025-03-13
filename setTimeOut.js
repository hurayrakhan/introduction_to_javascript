console.log("Abu Hurayra Khan")
console.log("Miskat Ahasun khan");

setTimeout(() =>{
    console.log("Okay");
}, 1000);



let count = 0;

// setInterval(() => {
//     count = count + 1;
//     console.log(count);
// },2000)


// if i want to stop at destination

const clockId = setInterval(() => {
    count = count + 1;
    console.log(count);

    if(count >= 5){
        clearInterval(clockId)
    }
},2000)


console.log(clockId);