const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
let todoList = [];


app.post('/submit',(req, res) => {
     const {todo} = req.body;
     if(!todo){
        return res.status(400).send({error:"Todo is required"});
     }
     todoList.push({ todo });
     res.send({
       message: "Todo added",
     });
})

app.delete('/remove:index',(res,req)=>{
    
})



app.get('/Todos',(req,res)=>{
    res.send(todoList);
});

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})