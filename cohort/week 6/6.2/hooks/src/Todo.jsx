import { useState, useEffect } from "react"

export default function Todo() {
  const [id, setId] = useState();
  const [todo,setTodo] = useState();
  const [title, setTitle] = useState();

  useEffect(()=>{
    if(!id) return;

    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
       .then(response => response.json())
       .then((data)=>{
        console.log(data.todo);
        setTodo(data.todo.description);
        setTitle(data.todo.title);
       })

    return () => {
      console.log('cleaned up');
    }
  },[id])

  return (
    <div className="container">
      <h1>Todo</h1>
      <div>

      <input
        placeholder="Enter todo id"
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        />
        <button >get</button>
        </div>
        <h1>{title}</h1>
      <h3>{todo}</h3>
    </div>
  );
}
