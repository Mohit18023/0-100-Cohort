import express from 'express'
import {NAME} from "@repo/common/config"
const app = express();

console.log(NAME)
app.use("/",(req,res)=>{
    res.json({
        name:NAME
    })
})
app.listen(5000,()=>{
    console.log("Server running on port 5000")
})