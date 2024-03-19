import { useState } from 'react';


const App = () => {
  const [title, setTitle] = useState('');
  const [todo , setTodo] = useState('');
  const [todos, setTodos] = useState([
    {
      title: 'Title 1',
      todo:"Todo 1"
    },{
      title: 'Title 2',
      todo:"Todo 2"
    },{
      title: 'Title 3',
      todo:"Todo 3"
    }
  ]);

  const handleClick = () => {
    setTodos([...todos, {
      title, 
      todo }]);
    setTitle('');
    setTodo('');

  }
  return (
    <>
      <div className='Container'>

        <div className="heading">
          <h1>Todo App</h1>
        </div>
        <div className="inputDiv">
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Todo" />
          <button onClick={handleClick}>Add</button>
        </div>

        <div className="todoList">
          {todos.map((todo, index) => (
            <div key={index} className="todo">
              <h3>{todo.title}</h3>
              <p>{todo.todo}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default App;
