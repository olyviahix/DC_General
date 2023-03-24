//Given a sentence, capitalize each word 
//The sun rises in the east => The Sun Rises In The East



const mySentance = "The sun rises in the east"
const words = mySentance.split(" ");


for(let i=0; i<words.length; i++){
    words[i] = words [i][0].toUpperCase() + words[i].substr(1);

}
console.log(words.join(" "))