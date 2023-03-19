//basic variables
//three different ways of declaring variables: var, const, and let
//var creates variables that can be changed, const creates constants
//let will be explained later
/*
//console.log() is like printing to terminal
//var vs. const behavior
var num = 0;
console.log(num);
num += 34;
console.log(num);
console.log("\n");
*/

//unallowed behavior
//TS is strongly typed, so setting variable to a type that isn't the same as what it was initalized to is not allowed
/*
var s = "asdf";
s = 5;
*/



//null means there is definitely nothing in the variable
//this is because null is manually set
/*
var n = null;
console.log(n);
n = 5;
console.log(n + "\n");
*/

//undefined means there could be something in the variable, but it isn' there yet
//the default type of a variable if it isn't initialized is undefined
//however, you are allowed to change the type by initializing it
/*
var u;
console.log(typeof u);
u = "number";
console.log(typeof u + "\n");
*/

//any type like a cheap way out for debugging, shouldn't really be used
//this is because any will change variable behavior to JS, not TS, so why even use TS at that point?
//should be replaced with other TS structures
/*
var a : any;
a = 123;
console.log(a);
a = "asdf";
console.log(a);
a = false;
console.log(a);
*/