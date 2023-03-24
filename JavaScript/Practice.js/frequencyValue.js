// Given an array of integers arr, find the number that has a frequency in the array equal to its value.
// Return the largest one if more than one. If there is none return -1
// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only number in the array is 2 because frequency[2] == 2.
// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all valid, return the largest of them.
// Input: arr = [2,2,2,3,3]
// Output: -1
// Explanation: There are no numbers in the array.


// Javascript solution to the above problem

function checkFrequency(arr){
    const m = new Map();
    for(x of arr){
        if(m.has(x)){
            m.set(x,m.get(x)+1)
        }else{
            m.set(x,1);
        }
    }
    console.log(m)
    let max=-1;
    m.forEach((v,k)=>{
        if(v==k){
            if(k>max){
                max=k;
            }
        }
    })
    // console.log(max);
    return max;
}

const a = checkFrequency([2,2,2,3,3]) //-1
const b = checkFrequency([2,2,3,4]) // 2
const c = checkFrequency([1,2,2,3,3,3]) //3
