//function demo file
//basic bubble sort to show syntax
/*
function BubbleSort(arr: number[]) {
    //notice that for loops look very similar to java for loops
    //also notice the usage of let, which restricts the variable to its own code block (in this case the for loop)
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let first = arr[i];
                let second = arr[j];
                arr[i] = second;
                arr[j] = first;
            }
        }
    }
    return arr;
}

var ray:number[] = [1,8,5,2,7,3,9,5,6,4];
console.log(BubbleSort(ray) + "\n");
*/

/*
function isDivisible(x : number, y : number) : boolean {
    return (x % y) == 0;
}



console.log(isDivisible(16,4));
console.log(isDivisible(6,1));
console.log(isDivisible(729,8) + "\n");
//console.log(isDivisible("bob", true));
*/


//technically, this is valid code, but this isn't preferred
/*
function identity(arr : any[]) : any {
    return typeof arr[0];
}

const foo1:number[] = [23, 356, 2.67, -10, 72];
console.log(identity(foo1) + "\n");
*/

/*
//this is much better and more standard
function identity2<Type>(arr : Type[]) : string {
    const InputType:string = typeof arr[0];
    return InputType;
}

const foo2:string[] = ["a", "b", "c", "d"];
console.log(identity2(foo2) + "\n");
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
console.log(Union(-1) + "\n");
*/


/*
//Overload signatures
function Over(n : number): number;
function Over(n : number, s : string): string;

//Implementation signature (NOT callable)
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
//console.log(Over(3,"bob",true));
*/