import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [title, setTitle] = useState("");
  const [done, setDone] = useState(false);
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      title: title,
      todo: todo,
      done: done,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setTodo("");
  }

  return (
    <>
      <div className="container">
        <div className="form">
          <div className="addTodo">
            <h2>Add new todo in your list</h2>
            <form onSubmit={handleSubmit}>
              <div className="titleDiv">
                <label htmlFor="title">Title: </label>
                <input
                  type="text"
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>
              <div className="inputDiv">
                <label htmlFor="TodoInput">Description : </label>
                <input
                  type="text"
                  id="TodoInput"
                  onChange={(e) => setTodo(e.target.value)}
                  value={todo}
                />
              </div>
              <button type="submit">Add todo</button>
            </form>
          </div>
        </div>
        <div className="todolist">
          <h2>Your Todo List</h2>
          {todos.map((item, index) => {
            return (
              <div key={index} className="todo">
                <h3>{item.title}</h3>
                <p>{item.todo}</p>
                {console.log(todos)}
                <input
                  type="checkbox"
                  onChange={() => {
                    const newTodos = [...todos];
                    newTodos[index].done = !newTodos[index].done;
                    setTodos(newTodos);
                    
                  }}
                  
                  checked={item.done}
                />
              
              </div>
            );
          })}
          
        </div>
      </div>
    </>
  );
}

export default App;
