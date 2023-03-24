// Given an array of positive and negative numbers, arrange them in an alternate fashion such that every positive number is followed by a negative and vice-versa maintaining the order of appearance
// Input:  arr[] = {1, 2, 3, -4, -1, 4}
// Output: arr[] = {-4, 1, -1, 2, 3, 4}

///test cases--------------------------------
const test = [1, 2, 3, -4, -1, 4];
const test1 = [-1, -2, -3, 4, 1, -4];
const test2 = [-1, -2, -3, 4, 1, -4, 0, 5, -7];
///------------------------------------------

function domino(a){
    let pos = [];
    let neg = [];
    let dominos = [];
//three empty arrays-------------------
    for(let i = 0; i<a.length; i++){
        if(a[i]<0){
            neg.push(a[i]);
        }
        else{
            pos.push(a[i]);
        }
    }
//sort by pos / neg
    for(let i = 0; i<a.length; i++){
        if(neg[i]!=null){
            dominos.push(neg[i]);  
        }
        if(pos[i]!=null){
            dominos.push(pos[i]);
        }
    }
//check if next item exists then push sequentially
    console.log("starting array is: "+a+"\n");
    console.log("domino array is: " +dominos+"\n");
    console.log("--------------------------------");
}
//print result------------------------------

domino(test);
domino(test1);
domino(test2);







