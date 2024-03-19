const express = require("express");
const zod = require("zod");
const cors = require("cors");

const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());
const schema = zod.string();

let todo_list = ["go to gym"];

function todo_exists(todo) {
  return todo_list.includes(todo);
}

app.get("/add", (req, res) => {
  const todo = req.query.todo;
  try {
    const response = schema.safeParse(todo);

    if (response.success) {
      // add todo to the database or to local storage

      // check if todo already exists
      if (todo_exists(todo)) {
        res.status(400).json({
          error: "Todo already exists",
        });
      } else {
        todo_list.push(todo);
        res.status(200).json({
          message: "Todo added successfully",
        });
      }
    } else {
      // handle the error
      res.status(400).json({
        error: "Invalid input",
      });
    }
  } catch (err) {
    res.status(400).json({
      error: "Error adding todo",
    });
  }
});

app.get("/delete", (req, res) => {
  const todo = req.query.todo;
  try {
    const response = schema.safeParse(todo);
    if (response.success) {
      // check if todo exists
      if (todo_exists(todo)) {
        // delete the todo
        todo_list = todo_list.filter((item) => item !== todo);
        res.status(200).json({
          message: "Todo deleted successfully",
        });
      } else {
        res.status(400).json({
          error: "Todo does not exist",
        });
      }
    } else {
      res.status(400).json({
        error: "Invalid input",
      });
    }
  } catch (error) {
    res.status(400).json({
      error: "Error deleting todo",
    });
  }
});

app.get("/list",(req,res)=>{
    if(todo_list.length === 0){
        res.status(200).json({
            message: "Todo list is empty"
        });
    }
    else{
        res.status(200).json({
            message: "Todo list",
            data: todo_list
        });
    }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
