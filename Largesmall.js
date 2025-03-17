//find largest and smallest number using Math.max and Math.min function.

function findminmax(arr){
    let largest = Math.max(...arr); //spread operator.
    let smallest = Math.min(...arr); //spread operator.
    return {largest, smallest};
}
let number = [7,6,5,4,3,2,1];
let result = findminmax(number);
console.log("smallest : "+ result.smallest);
console.log("largest : "+ result.largest);