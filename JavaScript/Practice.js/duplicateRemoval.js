// 2) You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent 
// and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made

// Input: s = "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  
// The result of this move is that the string is "aaca", of which only "aa" is possible, 
// so the final string is "ca".


const str = 'abbaca';
const removeDuplicates = (str = '') => {
   const arr = [];
   for(const char of str){
      if(char === arr[arr.length - 1]){
         while(arr[arr.length - 1] === char){
            arr.pop();
         };
      } else {
         arr.push(char);
      };
   };
   return arr.join('');  
};
console.log(removeDuplicates(str));


