//Given array of number 1..n find the missing number in the array
//for example:
//a = [1,2,4,6,7,8,9]
//missing numbers [3,5]


// a = [1, 2, 4, 6, 7, 8, 9] //array to loop through
// b = [] // new array with output answer

// let m = new Map();
// m.set("A", "1"); // key(A) and value(1)
// m.set("B", "2");
// m.set("C", "4");
// m.set("D", "5");
// m.set("E", "7");
// m.set("F", "8");
// m.set("G", "9");


// console.log(m.get("B")); //prints 2
// console.log(m.has("B")); //prints true


const findMissing = (a)=>{
    let x = new Map();
    let big = 0;
    let output = [];
    for(let n in a){
        //x.set(1,1) , big = 1
        //x.set(4,4) , big = 4
        //x.set(2,2) , big = 4
        //x.set(6,7) , big = 6
        //x.set(7,7) , big = 7
        //x.set(8,8) , big = 8
        x.set(a[n],a[n]);
        if(a[n]>big) {
            big = a[n];
        }
    }
    for(let i=1;i<=big;i++){
        if(!x.has(i)){
            output.push(i)
        }
    }
    return output;
}

let a = [1,4,2,6,7,8]

let output = findMissing(a);
console.log(output);
