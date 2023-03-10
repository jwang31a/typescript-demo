//in typescript, reassignment from number to string isn't possible
var q = 5;
q = "no";
//console.log(q);

//testing types in JS
//can also manually assign undefined type
let age;
//typeof is operator
console.log(typeof age);
console.log(typeof 10);
console.log(typeof "bob");
let n = null;
console.log(typeof n);
/*
what's the difference between null and undefined?
undefined is when we don't give the variable a definiton (yet)
null has to be manually assigned, meaning there is no value)
*/
console.log(typeof true);
console.log(typeof null);
//somewhat contradictory statement, since NaN means not a number
console.log("NaN is a " + typeof NaN);
//n denotes that this isn't a normal number, but a BigInt
const massive = BigInt(999999999999999999999);
console.log(massive);
//this isn't allowed, since BigInts can't mix with other types
//console.log(massive + 3);

//math stuff
console.log("remainder of 35/4 is " + 35 % 4);
//although remainder does work with floats, floating point math on computers is always iffy
console.log("remainder of 10.1/2.1 is " + 10.1 % 2.1);
//apparently there's a type called symbol, but idk the use, and it seems too advanced for me and our purposes
//there's also objects

/*
math stuff
Math.E
Math.PI
other constants exist, but they aren't useful for our purposes

Math.abs()
Math.sqrt()
Math.cbrt()
Math.hypot(x,y), gives length of hypotenuse from origin given coordinate (but really just squares the arguments and takes the sqrt of the sum)
Math.hypot(x,y,z), gives length of hypotenuse given three dimensional location? (extension of function above for more arguments)

Math.sin()
Math.cos()
Math.tan()
or put a in front to get arc functions
Math.exp(),  e^x
Math.log(), ln()
Math.log2(), binary log

Math.ceil(), ceiling
Math.floor(), floor
Math.round()
Math.trunc(), removes decimals

Math.max(), gives largest of numbers in arguments
Math.min()
if no arguments for these functions, doesn't really do anything

Number.isInteger()

.toString()
+n (unary plus, can convert things to numbers easily?)
*/

console.log(Math.max);
console.log(Math.min);
