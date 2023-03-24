//Given two integer arrays, find the numbers that is found in both arrays. the resulting output would be the array with all those numbers
//Example:
//a = [30,2,3,5,90]
//b = [9,2,6,5,100]



let a=[] //left empty so that the function we give will loop through the array we give
let b=[] //left empty so that the function we give will loop through the array we give

let c=[] // new array with resulting output answer


function numFind(a,b){
for(i=0; i<a.length; i++){ // 1st loop for array a

    for(j=0; j<b.length; j++){ // 2nd loop for array b
        if(a[i]==b[j]){
            c.push(a[i])
        }
    }
}
console.log(c)
}
numFind([30,2,3,5,90],[9,2,6,5,100])