import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]); // Add this line to initialize the todos state

  const fetchTodos = () => {
    // send the get request to fetch the todos
    const response = axios.get("http://localhost:5000/getTodos");
    response.then((res) => {
      console.log(res.data.todos);
      setTodos(res.data.todos);
    });
  };

  useEffect(() => {
    fetchTodos();
  }, []); // Add an empty dependency array to run the effect only once

  const handleClick = () => {
    console.log(todo);

    // Send the POST request to add the todo
    axios
      .post("http://localhost:5000/addTodo", {
        todo: todo, // Send the todo directly in the request body
      })
      .then((res) => {
        console.log(res);
        fetchTodos(); // Fetch the todos again to update the list
        //alert("Todo added successfully");
      })
      .catch((err) => {
        console.error(err);
        alert("Error adding todo");
      });

    setTodo(""); // Clear the todo input field
     
  };

  const handleDelete = (todo) => {
    return () => {
      axios.post("http://localhost:5000/deleteTodo", { todo: todo })
      .then((res) => {
        console.log(res);
        fetchTodos(); // Fetch the todos again to update the list
        alert("Todo deleted successfully");
      })
    };
  };

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Todo List</h1>
        </div>
        <div className="AddTodo">
          <input
            type="text"
            id="newtodo"
            placeholder="Write your todo here "
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button onClick={handleClick}>Add Todo</button>
        </div>
        <div className="list">
          <div className="heading">
            <h1>--List--</h1>
          </div>
          <div className="listitem">
            {todos.map((todo, index) => {
              return (
                <div key={index} className="todo">
                  <p>{todo.todo}</p>
                  <button onClick={handleDelete(todo.todo)}>Delete</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
