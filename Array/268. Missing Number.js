// 268. Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:

// Input: nums = [0,1]

// Output: 2

// Explanation:

// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]

// Output: 8

// Explanation:

// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

 
// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.
 

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?



//!==============================================


//1st approch - 
// time complexity - O(n^2) : becasue where using for() O(n) loop inside that includes O(n) = O(n^2)
// space complexity - O(1)
var missingNumber = function (nums) {
    if (nums.length == 0) return -1
    const End = nums.length;

    for (let i = 0; i <= End; i++) {
        if (!nums.includes(i)) return i
    }

    return -1;
};

//2nd approch - using sets
var missingNumber = function (nums) {
    if (nums.length == 0) return -1
    const End = nums.length;

    const nSet = new Set(nums);

    for (let i = 0; i <= End; i++) {
        if (!nSet.has(i)) return i
    }

    return -1;
};

//3rd approch - using Map 
var missingNumber = function (nums) {
    if (nums.length === 0) return -1;

    const End = nums.length;
    const numMap = new Map();

    // Store each number in the map
    for (let i = 0; i < nums.length; i++) {
        numMap.set(nums[i], true);
    }

    // Look for the missing number
    for (let i = 0; i <= End; i++) {
        if (!numMap.has(i)) return i;
    }

    return -1;
};

//4th approch - using formulas
var missingNumber = function (nums) {

    let totalNumberLength = nums.length;

    if (totalNumberLength == 0) return -1

    let sumOfN = (totalNumberLength * (totalNumberLength + 1)) / 2;
    let sumOfP = 0;

    for (let i = 0; i < totalNumberLength; i++) {
        sumOfP = sumOfP + nums[i];
    }

    return sumOfN - sumOfP;
};
