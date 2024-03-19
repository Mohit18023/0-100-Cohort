const express = require('express');
const zod = require('zod');

const app = express();
let numberOfRequest = 0;
function calculateRequest(req,res,next) {
  numberOfRequest++;
  console.log(numberOfRequest);
  next();
}

// app.use is used to call middleware on every requests that comes to your server
app.use(express.json());

app.use(calculateRequest)



app.post("/health-checkup",(req,res)=>{
    res.json({
        msg:"hii there"
    })
});

app.get("/health-checkup2",(req,res)=>{
    res.json({
        msg:"hello "
    })
});

// global catches -> used to give clean text when server when down or an error has occured , end user should not see you backend logic if he/she does then its not good for the security of your server and the user can get to know how to break your server

app.use((err,req,res,next)=>{
    res.json({
        msg:"Sorry! Somthing is up with the server"
    })
})



app.listen(5000,()=>{
    console.log("Server running on port 5000");
})