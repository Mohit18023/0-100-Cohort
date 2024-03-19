const express = require("express");
const zod = require("zod");
const mongoose = require("mongoose");
const cors = require("cors");
//const jwt = require("jsonwebtoken");

mongoose.connect(
  "mongodb+srv://mohitchoudhary1054:QfJndg00cr4OBkbD@cluster0.902vrzk.mongodb.net/todo"
);

const db = mongoose.connection;

// Event listeners for connection success and error
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log(`Connected to MongoDB successfully!`);
});

const app = express();
const PORT = 5000;
app.use(cors());
const todoSchema = new mongoose.Schema({
  todo: { type: String, unique: true },
});

const Todo = mongoose.model("todo", todoSchema);

app.use(express.json());

const schema = zod.string();

async function todo_exists(TodoItem) {
  const todo = await Todo.findOne({ todo: TodoItem });
  return todo;
}

app.post("/addTodo", async (req, res) => {
  const TodoItem = req.body.todo;
  console.log(TodoItem);

  try {
    const response = schema.safeParse(TodoItem);
    if (!response.success) {
      res.status(400).json({
        error: "Invalid input",
      });
    }

    // check if the todo exists in the database or not
    const exists = await todo_exists(TodoItem);
    if (exists) {
      return res.status(400).json({
        error: "Todo already exists",
      });
    }

    // add the todo to the database'
    const newTodo = new Todo({
      todo: TodoItem,
    });

    await newTodo.save();
    res.status(200).json({
      message: "Todo added successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error adding todo",
    });
  }
});

app.post("/deleteTodo", async (req,res) => {
    const TodoItem = req.body.todo;
    console.log(TodoItem);
    try{
        const response = schema.safeParse(TodoItem);
        if(!response.success){
            return res.status(400).json({
                error: "Invalid input"
            })
        }
        
        if(!TodoItem){
            return res.status(400).json({
                error: "Invalid input"
            })
        }
        const exists = await todo_exists(TodoItem);
        if(!exists){
            return res.status(400).json({
                error: "Todo does not exist"
            })
        }
        await Todo.deleteOne({todo:TodoItem});
        res.status(200).json({
            message: "Todo deleted successfully"
        })

    } 
    catch (error) {
        res.status(400).json({
            error: "Error deleting todo"
        })
    }
});

app.get("/getTodos", async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json({
        todos: todos,
        });
    } catch (error) {
        res.status(400).json({
        error: "Error fetching todos",
        });
    }
    }
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
