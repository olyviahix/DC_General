// Given a word return the encrypted format. apple => 1#16#16.. 
// abcdefghijklmnopqrstuvwxyz 

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// let word = "1#13#9#18";

function decriptNum(Num){
let decript=[] 

   Num=Num.replaceAll("#",",").split();
    for (i=0; i<Num.length; i++){
     let code=Num[i]
        for (x=0; x<alphabet.length; x++){
            if (code==alphabet[x]){
                decript.push(alphabet[x])
            }
        }
    }
    console.log(decript);
}
decriptNum("1#13#9#18");