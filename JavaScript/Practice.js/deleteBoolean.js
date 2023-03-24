// Given two string a and b return true if they are equal as if they are typed in keyboard

// # is backspace

// input a = 'ab#c' b = 'ad#c'
// output is true

// Input: s = "ab##", t = "c#d#"
// Output: true
// Both s and t become ""

function isEqual(a,b){
    let p = trimmedString(a);
    let q = trimmedString(b);
    if(p==q) return true;
    return false;
}

function trimmedString(s){
    let i=0;
    let t = [];
    for(let x = 0;x<s.length;x++){
        //x=0, s[x] = a
        //t = [a]
        //x=1, s[x] = b
        //t = [a,b]
        //x=2, s[x] = #
        //t = [a]
        //x = 3, s[x] = c
        //t = [a,c]
        if(s[x] == '#') {
            t.pop();
        }else{
            t.push(s[x]);
        }
    }
    return t.join('');
}

const e = isEqual('ab#c','ad#c');
console.log(e)