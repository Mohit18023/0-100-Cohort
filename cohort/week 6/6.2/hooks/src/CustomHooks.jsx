import { useState, useEffect } from 'react'
import axios from 'axios';

function useTodos() {
     const [todos, setTodos] = useState([]);

     useEffect(() => {
       axios.get("").then((res) => {
         setTodos(res.data.todos);
       });
     }, []);

     return todos;
}



const CustomHooks = () => {
   const todos = useTodos();
  return (
    <div>
      {todos.map((todo)=>{
        return <div key={todo.id}>{todo.title}</div>
      })}
    </div>
  )
}

export default CustomHooks
