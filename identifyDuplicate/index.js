// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


var containsDuplicate = function(nums) {
    //create a buffer to store intergers first of

    //create variable to identify unique value
    const set = new Set();

    //I want to loop through the array to check for the duplicate value
    for(let num of nums) {
        if(set.has(num)) return true

        //here's whwere we add to the buffer
        set.add(num)
    }
    //return false if nums is not a duplicate
    return false
};


//second solution using the size of the set
var containsDuplicate = function(nums) {
    // create an unordered set then check if the size of the set is equal to the size of the array
    return new Set(nums).size !== nums.length;
};