// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than n/2 times. 
// You may assume that the majority element always exists in the array.
// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const arr = [2, 4, 2, 2, 2, 4, 6, 2, 5, 2];
const majorityElement = (arr = []) => {
   const threshold = Math.floor(arr.length / 2);
   const map = {};
   for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      map[value] = map[value] + 1 || 1;
      if (map[value] > threshold)
         return value
   };
   return false;
};
console.log(majorityElement(arr));