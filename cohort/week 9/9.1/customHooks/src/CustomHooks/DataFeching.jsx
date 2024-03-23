// Data fetching hooks can be used to encapsulate all the logic to fetch the data from your backend

import { useEffect, useState } from "react";
import axios from "axios";
import propTypes from "prop-types";

function useTodos({n}){
  const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    const value = setInterval(()=>{
        axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
          setTodos(res.data.todos);
          setLoading(false);
        });
    },n*1000)
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });

    return () => {
        // cleanup
        clearInterval(value);
    }
  }, [n]);

  return {todos,loading};
}
function DataFetching() {
  const {todos,loading} = useTodos(10); // custom hook
  
    
  return (
    <>
      {loading ? <div>loading....</div>:todos.map((todos,index)=>{
        return <Track key={index} todo={todos}/>

      })}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

Track.propTypes = {
    todo: propTypes.object
};

export default DataFetching;


// we can also use swr library to fetch data from the backend
//import useSWR from 'swr'

// const fetcher = (url) => fetch(url).then((res) => res.json());
// const fetcher = async function(url) {
//   const data = await fetch(url);
//   const json = await data.json();
//   return json;
// };

// function Profile() {
//   const { data, error, isLoading } = useSWR('https://sum-server.100xdevs.com/todos', fetcher)
 
//   if (error) return <div>failed to load</div>
//   if (isLoading) return <div>loading...</div>
//   return <div>hello, you have {data.todos.length} todos!</div>
// }