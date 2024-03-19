import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  // function fetchTodos(){
  //   fetch("https://sum-server.100xdevs.com/todos").then((res) =>
  //     res.json().then((data) => {
  //       console.log(data.todos);
  //       setTodos(data.todos);
  //     })
  //   );
  // }

  useEffect(()=>{
     const fetchdata = async () => {
      try{
        const response = await axios.get("https://sum-server.100xdevs.com/todos");
      console.log(response.data.todos);
      setTodos(response.data.todos);
      }
      catch(error){
        console.log(error);
      }
     }

     fetchdata(); // Fech data initially

     const intervalId = setInterval(fetchdata, 10000); // Fetch data every 10 seconds 
      
      // Clean the intervaal to avoid memory leaks
      return () => clearInterval(intervalId); // Clean up the interval  

  },[])

  // setInterval(()=>{
  //   fetchTodos();
  
  // },1000000000000)

  return (
    <>
      <div className="container">
        <h1>Todo list</h1>
        <div className="list">
          {todos.map((todos,index)=>{
            return(
              <div key={index} className="todo">
                <h3>{todos.title}</h3>
                <p>{todos.description}</p>
                <p>{todos.completed}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
