const readline = require('readline-sync')
function BinarySearch(arr, target){
    let left=0;
    let right=arr.length-1;
  
    while(left <= right)
        {
            let mid = Math.floor((left+right)/2);
            if(arr[mid] === target)
                {
                    return mid;
                }
                else if(arr[mid] < target)
                    {
                        left = mid + 1 ;
                    }
                    else {
                        right =mid - 1 ;
                    }
        }
        return -1

}

let array = [1,2,3,4,5]
        const target = parseInt(readline.question("enter the target : "));
        const result = BinarySearch(array,target);
        
        if(result !== -1)
            {
                console.log(`element found at index ${result}`);
            }
            else {
                console.log("not found")
            }

