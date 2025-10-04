// 1. Demonstrate block scope with let
// {
//     let a = 5
//     console.log(a);
// }
// console.log(a);//error


// 2. Demonstrate function scope with var
// function test() {
//     var x = 10;
//     console.log(x);
// }
// console.log(x); //error
// test()

//3 Declare global variable and access inside function.
// let a = 20
// function show() {
//     console.log(a)
// }
// show()

// 4 Demonstrate const block scope.
// {
//     const z = 100
//     console.log(z);
// }
// console.log(z); //error

//5 Re-declare var inside same scope
// var a = 10
// var a = 20
// console.log(a)
