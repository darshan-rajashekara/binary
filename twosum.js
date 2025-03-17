// finding two sum using hashmap.

function findtwosum(arr, target){
    let map = new Map();

    for (let i=0; i<arr.length; i++)
        {
            let complement = target - arr[i];
            if(map.has(complement))
                {
                    return [map.get(complement), i];
                }
            map.set(arr[i], i);    
        }
        return [];
}

console.log(findtwosum([2,7,11,15], 9));
