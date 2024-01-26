/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map(); // Use a Map to store numbers and their indices

for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate the complement needed for the current number

    // Check if the complement exists in the Map
    if (numMap.has(complement)) {
        return [numMap.get(complement), i]; // Return the indices of complement and current number
    }

    numMap.set(nums[i], i); // Store the current number and its index in the Map
}
};

console.log(twoSum([2,7,11,15],  9))


var twoSum = function(nums, target) {
    //firstly we try to loop through the nums array using the for loop
    for(let i=0; i<nums.length; i++){
        //secondly we use multi-dimensional array to to run and increment loop on subsequent indices of the nums array
        for(let j=i+1; j<nums.length; j++){
            //thirdly we check if the values of the nums array are equal to the target
            if(nums[i] + nums[j] === target){
                //if the values of the nums array are equal to the target, we return the indices of the values
                return [i, j];
            }
        }
    }
};

console.log(twoSum([2,7,11,15],  9))