/*

The template for an IIFE consists of an anonymous function declaration, inside a set of parenthesis (whichs turn the definition into a function expression, or an an assignment) and then a set of calling parenthesis at the end tail of it
*/

// (function(){
//     let a=90;
//     let b = 24;
//     console.log(a+b);
// })()

//USE CASES
//1.simulating static variable

/**
 you define a static variable inside a function, that variable will be common to all instances of the function, no matter how many times you call it

 function autoIncrement() {
    static let number = 0
    number++
    return number
}
    output :-function would return a new number every time we call it 
autoIncrement -> 1
autoIncrement -> 2
 */

//a.simulate STATIC variable with generators
const autoIncrement = (function(){
 let a=0;
 return function(){
    a++;
    return a;
 }
})()
// console.log(autoIncrement())
// console.log(autoIncrement())
// console.log(autoIncrement())

//2.Simulating private variables
const autoIncrementer = (function(){
 let a=0;
 return{
    incr(){
        a++;
    },
    get value(){
        return a;
    }
 }
})()
autoIncrementer.incr()
console.log(autoIncrementer.value)
autoIncrementer.incr()
console.log(autoIncrementer.value)
