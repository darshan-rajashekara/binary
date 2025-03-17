// find two sum using two pointer.

function findtwosum(arr, target){
    arr.sort((a,b) => a-b); // sorting array.
    let left = 0;
    let right = arr.length-1;
    
    while(left < right)
        {
            let sum = arr[left] + arr[right];
            if(sum === target) 
                {
                    return [arr[left], arr[right]];
                }
           if(sum < target)
            {
                left++;
            }
            else {
                right--;
            }   
        }
        return "no pair found"; 
}

console.log(findtwosum([2,7,11,15], 9));