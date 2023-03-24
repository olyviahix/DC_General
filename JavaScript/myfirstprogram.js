function addnumbers(a,b){
    let c = a + b;
    console.log(c);        
}

function simplecalculator(a,b,o){
    if(o == '+' || o == 'plus' || o =='add'){
        let c = a+b;
        console.log(c);
    }
    if(o == '+'){
        console.log("second addition");
    }
    else if(o == '-' ){
        let c = a-b;
        console.log(c);        
    }else if(o == '*'){
        let c = a*b;
        console.log(c);          
    }else if(o == '/'){
        let c = a/b;
        console.log(c);          
    }else{
        console.log("Dont know what you are doing");
    }
}

// addnumbers(45,25);
// addnumbers(145,125);

simplecalculator(4,5,"+");
// simplecalculator(4,15,"plus");
// simplecalculator(14,15,"add");
// simplecalculator(4,5,"-");
// simplecalculator(4,5,"*");
// simplecalculator(15,5,"/");
// simplecalculator(15,5,"$");