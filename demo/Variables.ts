//basic variables
var num = 0;
console.log(num);
num += 34;
console.log(num);
console.log("\n");

//unallowed behavior
/*
var s = "asdf";
s = 5;
*/

//null means there is definitely nothing in the variable
/*
var n = null;
console.log(n);
n = 5;
console.log(n + "\n");
*/

//undefined means there could be something in the variable, but it isn' there yet
/*
var u;
console.log(typeof u);
u = "number";
console.log(typeof u + "\n");
*/

//any type like a cheap way out for debugging, shouldn't really be used
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
