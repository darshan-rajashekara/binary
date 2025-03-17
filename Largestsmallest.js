//finding largest and smallest number using loop.

function Findminmax(arr){
    let min = arr[0];
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min)
            {
                min = arr[i];  //updating the min by adding value of arr[i] to min if it is less than min.
            }
        if(arr[i] > max)
            {
                max = arr[i]; //updating the max by adding value of arr[i] to max if it is greater than max.
            }   
    }
    return {min, max}; 
}

let number = [1,2,3,4,5,6,7];
let result = Findminmax(number);

console.log("smallest number : " + result.min);
console.log("largest number : " + result.max);