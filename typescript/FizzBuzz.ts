function fizz_buzz(num: number){
    if (num % 3 == 0) {
        if (num % 5 == 0) {
            return "fizzbuzz";
        } else {
            return "fizz";
        }
    } else if (num % 5 == 0) {
        return "buzz";
    } else {
        return num;
    }
}

console.log(fizz_buzz(3).toString())
console.log(fizz_buzz(5).toString())
console.log(fizz_buzz(15).toString())
console.log(fizz_buzz(9).toString())
console.log(fizz_buzz(50).toString())
console.log(fizz_buzz(45).toString())
console.log(fizz_buzz(113).toString())

export {};