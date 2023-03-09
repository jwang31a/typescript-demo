/*
block comment
*/

//testing loops first
/*works as expected
for (let i = 0; i < 10; i++) {
    console.log(i);
}
*/

//bubble sort:
/*
algo: 
  - get index
  - check number at that index and number at next index
  - if 1st greater, swap, if not, don't swap
  - loop until length of array
  - redo starting at next index
*/

//array testing
/* works as intended (.sort() sorts alphabetically, not by value)
.push() to add element to array, .pop() to remove
var tester:number[] = [];
tester.push(2);
console.log(tester);
tester.push(123);
console.log(tester);
tester.push(-123);
console.log(tester);
tester.sort();
console.log(tester);
*/

//bubble sort works!
function BubbleSort(arr: number[]) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
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
console.log(BubbleSort(ray));
