const http = require("http");
const express = require('express');
const axios = require('axios');
const { response } = require("express");
const app = express();
app.use(express.json());
const expenses = [
    {
        "category name":"gym",
        "description":"monthly membership",
        "icon":"barbell"
    },
    {
        "category name":"groceries",
        "description":"shopping trip to trader joes",
        "icon":"apple"
    },
    {
        "category name":"oil change",
        "description":"took the car to jiffy lube",
        "icon":"car"
    },
    {
        "category name":"electric bill",
        "description":"need to keep the lights on",
        "icon":"lightning bolt"
    },
    {
        "category name":"phone bill",
        "description":"pay to verizon",
        "icon":"phone"
    },
]

// middleware to restrict the number of calls that can be made to an API

let callCount = 0;
app.use('/expenses', (req, res, next) => {

    if (req.method=="GET" || "POST"){
        callCount+=1;
    }
    if (callCount>10){
        return res.status(429).json({error: "Exceeded Call Limit"});
    }
    next();
})

let callCount = 0;
app.use('/categories', (req, res, next) => {

    if (req.method=="GET" || "POST"){
        callCount+=1;
    }
    if (callCount>5){
        return res.status(429).json({error: "Exceeded Call Limit"});
    }
    next();
})

// const checkGeo=(req,res,next)=>{}
//     const userIp = req.ip; 
//     axios.get(`https://ipapi.co/${userIp}/json`)
//     .then(response => {
//         const countryCode = response.data.country_code;
//         if(countryCode !== "US"){
//             return res.status(401).send({ error: 'You must be in the US to see this.'})
//         }
//         next();
//     })
// }
// app.use(checkGeo);



//app.use((req,res,next)=>{
// const userIp = req.ip; 
//     axios.get(`https://ipapi.co/${userIp}/json`)
//     .then(response => {
//         const countryCode = response.data.country_code;
//         if(countryCode !== "US"){
//             return res.status(401).send({ error: 'You must be in the US to see this.'})
//         }
//         next();
//     })
// })

app.get('/expenses',(req,res) =>{
    res.setHeader('Content-Type','application/json');
    res.send(JSON.stringify(expenses));
})
app.use((req, res, next) => {
    if (req.method === 'POST' && req.headers['content-type'] !== 'application/json') {
      return res.status(400).send({ error: 'Content-Type must be set to application/json' });
    }
    next();
  });
const server = http.createServer(app)
server.listen(3000,'127.0.0.1',()=>{
    console.log("Server started successfully");
})