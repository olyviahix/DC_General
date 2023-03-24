//  1
// 2 2
//3 3 3

function printPyramid(n,d){
    let spaces = '';
    let row = '';
    for(i = 0;i<n;i++){
        row='';
        spaces=''
        for(j=0;j<n-i-1;j++){
            spaces+=spaces+''
        }
        for(k=1;k<=i;k++){
        row+=spaces+(i+1);
        }
        console.log(row);
    }
}