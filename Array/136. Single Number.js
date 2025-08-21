// // 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1

 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.




//!==============================

// 1st approch - using Map 
// Time complexity - O(n)
// Space complexity - O(n)
var singleNumber = function (nums) {

    const newMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (newMap.has(nums[i])) {
            newMap.set(nums[i], newMap.get(nums[i]) + 1)
            if (newMap.get(nums[i]) == 2) newMap.delete(nums[i])
        } else {
            newMap.set(nums[i], 1)
        }
    }

    return newMap.size > 0 ? newMap.keys().next().value : -1;

};


//3rd approch - using XOR
// xor - it work like a toggle switch means if we apply xor on same number it will return 0 else it will return the number
// if we apply xor on all numbers we will get the single number which is the unique one
// changing is working like a switch . means if we change the state of a number it will toggle
var singleNumber = function (nums) {

    let number = 0;

    for (let i = 0; i < nums.length; i++) {
        number ^= nums[i];
    }

    return number;
};