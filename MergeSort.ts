//merge sort implementation with other stuff

//random
/*
for (var i = 0; i < 10; i++) {
    console.log(Math.random());
}
*/

//arr.slice() testing
/*
var fruits:string[] = ["Banana", "Orange", "Grape", "Apple", "Pear", "Blueberry"];
console.log(fruits.slice(0,5));
console.log(fruits.slice(2,2));
console.log(fruits.slice(2));
console.log(fruits.slice(1,-1));
*/

function MergeSort(arr : number[]) {
    if (arr.length <= 1) {
        return arr;
    }
    let first:number[] = arr.slice(0, arr.length/2);
    let second:number[] = arr.slice(arr.length/2, arr.length);
    let low = MergeSort(first);
    let high = MergeSort(second);
    let result = Merge(low, high);
    //uncomment to see divide and merge
    //console.log(result);
    return result;
}

function Merge(a : number[], b : number[]) {
    let _merged = [];
    let aInd = 0;
    let bInd = 0;
    //merging the two arrays
    while (aInd < a.length && bInd < b.length) {
        if (a[aInd] > b[bInd]) {
            _merged.push(b[bInd]);
            bInd++;
        } else {
            _merged.push(a[aInd]);
            aInd++;
        }
    }

    //if one array is already in merged array
    if (aInd >= a.length) {
        while (bInd < b.length) {
            _merged.push(b[bInd]);
            bInd++;
        }
    } else if (bInd >= b.length) {
        while (aInd < a.length) {
            _merged.push(a[aInd]);
            aInd++;
        }
    } else {
        return _merged;
    }
    return _merged;
}

//function to create somewhat randomized arrays
function Randomize(len : number) {
    var arr:number[] = [];
    for (var i = 0; i < len; i++) {
        arr.push(i);
    }
    for (var i = 0; i < arr.length - 1; i++) {
        if (Math.random() > 0.5) {
            let first = arr[i];
            let second = arr[i + 1];
            arr[i] = second;
            arr[i + 1] = first;
        }
    }
    return arr;
}

//test cases
//console.log(Randomize(20));
var testarr:number[] = Randomize(20);
console.log(testarr);
console.log(MergeSort(testarr));

//testing Merge()
/*
const m1 = [3,6,9,16,99];
const m2 = [1,7,19,27,101];
console.log(Merge(m1, m2));
*/
