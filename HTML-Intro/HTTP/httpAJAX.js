const request = new XMLHttpRequest(); 
request.onreadystatechange = function () { 
    console.log(this); }; request.open("GET", "./sample.txt"); 
    request.send(); 