// selection sort technique, where the smallest element is repeatedly moved to the front.
// How Selection Sort Works
// Idea:
// Selection sort divides the array into two parts:
// Sorted part (on the left)
// Unsorted part (on the right)
// At each iteration: It finds the smallest element in the unsorted part. Swaps it with the first unsorted element.


// ! example
let arr = [7, 1, 5, 4, 3, 2];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

console.log("result", selectionSort(arr));

// Time Complexity = O(n²)
// Space Complexity = O(1)