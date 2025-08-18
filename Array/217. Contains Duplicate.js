
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

//!================

//! first approch
// new Set(nums) - it will create new set with unique values
var containsDuplicate1 = function(nums) {
   return  new Set(nums).size !== nums.length;
};

//2nd approch using Map
//  Map - it will store the elements as keys and their occurrences as values
// map.has - it will check if the element is already present in the map
// map.set - it will add the element to the map
var containsDuplicate2 = function(nums) {
   const newNumMap = new Map(); 
   for(let i=0; i<nums.length;i++){
    if(newNumMap.has(nums[i])){
        return true;
    }else{
     newNumMap.set(nums[i],true)
    }
   }
   return false
};

//3rd approch using Set
//  Set - it will store only unique values
// set.has - it will check if the element is already present in the set
// set.add. - it will add the element to the set
var containsDuplicate3 = function(nums) {
   const newNumMap = new Set();
   for(let i=0; i<nums.length;i++){
    if(newNumMap.has(nums[i])){
        return true;
    }else{
       newNumMap.add(nums[i])
    }
   }
   return false
};


