// without middlewares 


// const express = require('express');


// const app = express();
// const PORT = 5000;

// function AuthMiddleware(req,res,next){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

// }



// app.get("/health-checkup",(req,res)=>{
    
//     // ugly way for authentication 

//     // if(username !== "mohit" || password !== "pass"){
//     //     // un Authorized user
//     //     res.status(400).json({
//     //         "msg":"Somethings up with your inputs"
//     //     });
//     //     return;
//     // } 

//     // // now query check
//     // if(kidneyId != 1 && kidneyId != 2){
//     //     res.status(400).json({
//     //         "msg":"Somethings up with your kidneyId"
//     //     });
//     //     return;
//     // }

//     // do the kidney thing here
//     res.json({
//         "msg":"Your kidney is fine"
//     });

// });


// app.listen(PORT,()=>{
//     console.log(`server running on port ${PORT}`)
// })


// with middleware

const express = require("express");

const app = express();
const PORT = 5000;

function authmiddleWare(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username === "mohit" && password === "mohit") {
    next();
  } else {
    res.status(400).json({ message: "unauthorized access" });
  }
}

function queryCheck(req, res, next) {
  const kidneyId = req.query.kidneyId;
  if (kidneyId > 0 && kidneyId < 3) {
    next();
  } else {
    res.status(400).json({ message: "invalid kidneyId" });
  }
}

app.get("/health-checkup", authmiddleWare, queryCheck, (req, res) => {
  res.status(200).json({
    message: "Health Checkup",
  });
});
