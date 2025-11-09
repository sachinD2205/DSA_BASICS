// Linear Search
// Linear Search is a simple search algorithm used to find a specific element in an array. It checks each element of the array one by one until the target value is found or the end of the array is reached.

// Example 1:
// Input: arr = [2, 4, 7, 10], target = 10

// Output: 3

// Explanation: 10 is found at index 3

// Example 2:
// Input: arr = [6, 8, 0, 3], target = 5

// Output: -1

// Explanation: 5 is not present in the array

// Approach:
// Start from the first element of the array.
// Compare the current element with the target value.
// If a match is found, return the index.
// If the loop ends without finding the target, return -1.
// Time & Space Complexity:
// Time Complexity: O(n) where n is the size of the array.

// In the worst case, the algorithm traverses the entire array.
// Each element is checked exactly once.
// Space Complexity: O(1) Constant Space
// No additional space is used that scales with input size.

// ! example

let arr = [7, 1, 5, 4, 3, 2];

const linearSearch = (ele) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return i;
    }
  }
  return -1;
};

console.log("result", linearSearch(4));
