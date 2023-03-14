//i can still be used and accessed outside of loop
//this problem is also not fixed in TS
for (let i = 0; i < 10; i++) {
    console.log("loop " + i);
}

console.log(i + ", outside loop");
console.log(i);

for (var i = 0; i < 10; i++) {
    console.log(i);
}
