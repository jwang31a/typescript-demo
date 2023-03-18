//function demo file
/*
function doSomething(n : number, s : string) {
    var r = "";
    for (var i = 0; i < n; i++) {
        r += s;
    }
    console.log(i);
    return r;
}

console.log(doSomething(5, "e"));
*/

/*
function isDivisible(x : number, y : number) : boolean {
    return (x % y) == 0;
}

console.log(isDivisible(16,4));
console.log(isDivisible(6,1));
console.log(isDivisible(729,8));
*/


//technically, this is valid code, but this isn't preferred
/*
function identity(arr : any[]) : any {
    return typeof arr[0];
}

const foo1:number[] = [23, 356, 2.67, -10, 72];
console.log(identity(foo1));
*/

/*
//this is much better and more standard
function identity2<Type>(arr : Type[]) : string {
    const InputType:string = typeof arr[0];
    return InputType;
}

const foo2:string[] = ["a", "b", "c", "d"];
console.log(identity2(foo2));
*/

/*
function Union(n : number) : boolean | number {
    if (n > 10 && n < 50) {
        return n + 123;
    } else if (n < 10) {
        return true;
    } else {
        return false;
    }
}

console.log(Union(15));
console.log(Union(51));
console.log(Union(-1));
*/

/*
//overloading functions is extremely complicated here
function Over(n : number): number;
function Over(n : number, s : string): string;
function Over(n : number, s? : string) : number | string {
    if (s !== undefined) {
        var r = "";
        for (let i = 0; i < n; i++) {
            r += s;
        }
        return r;
    } else {
        return n + 25;
    }
}

console.log(Over(2));
console.log(Over(3, "bob"));
*/
