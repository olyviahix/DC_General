const reverseNumbers = (input,k) =>{
    const o = [];
    const l = input.length;
    for(let x = 0;x<l;x+=k){
        for(let y = x+(k-1);y>=x;y--){
            if(input[y]){
                o.push(input[y])
            }
        }
    }
    return o;
}

const reversedArray = reverseNumbers([3,4,2,12,40,2,4],3);
console.log(reversedArray);