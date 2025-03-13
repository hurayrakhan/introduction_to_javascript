function a () {
    b()
    console.log("A");
}
function b () {
    c()
    console.log("B");
}
function c () {
    d()
    console.log("C");
}
function d () {
    e()
    console.log("D");
}
function e () {
    console.log("E");
}

a()