const express = require('express')
const zod = require('zod')

const PORT = 5000;
const app = express();


// Making validation for array using zod 
const Schema = zod.array(zod.number())

// suppose we are getting back bunch of things from the user 
// 
// {
//     name : string 
//     email: string =====> needs to be validated as mail i.e. @gmail.com
//     password: string ==> need to at least 8 words and must contains specification
//     country : "IN" or "US"  -> for now just use these  
//     contact : number ===> must be 10 digits   
// }
//
// const Schema = zod.object({ 
//    name : zod.string(),
//    email : zod.string().email(),
//    password : zod.string().min(8),
//    country : zod.literal("IN").or(zod.literal("US")),
//    contact : zod.number()
// })


app.use(express.json());

app.post("/health-checkup", (req, res) => {
  // Kidneys = [1,2] but how to i validate it : answer -> ZOD
  const kidneys = req.body.kidneys;
  const response = Schema.safeParse(kidneys);
  if(!response.success){
    res.status(411).json({
        msg:"input is invalid"
    })
  }else{
    res.send({
        response
    })
  }
//   const kidneyLength = kidneys.length;
//   res.send("You have " + kidneyLength + " kidneys");
});

// global catch
app.use((err, req, res, next) => {
    res.json({
        msg:"Somthing is up with the server"
    })
});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
