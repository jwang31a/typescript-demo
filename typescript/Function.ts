//:number after the arguments restricts return type
//like how java uses public type function() to limit type
/*
this doesn't compile bc TS will check to make sure reassignment can't happen
function nums(n : number) : number {
    return "asdf";
}
*/

//console.log(nums(6));

function MoreStuff(n : number | string) : number | string {
    return n;
}

console.log(MoreStuff("asdf"));
console.log(MoreStuff(91));
