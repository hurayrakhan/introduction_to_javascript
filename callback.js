// A callback function in JavaScript is a function that is passed as an argument to another function and is executed later, usually after some asynchronous operation is completed.

function ghotok (patri, name) {
    return patri(name);
}

const patri = function (name) {
    return "alhamdulillah ami kobul korilam : "+name;
}

const status = ghotok(patri, "Rahima");
console.log(status);
