import { useState } from "react";
import "./App.css";
import { CountContext } from "./Context";
import { useContext } from "react";
//  if you wanna use the the value from the contextAPI you can use it by wrapping that component  with the context provider


// Why we use contextAPI?
// 1. We can avoid prop drilling
// 2. We can avoid the use of redux
// 3. We can avoid the use of state management library
// 4. We can avoid the use of redux thunk
// 5. We can avoid the use of redux saga
// 6. We can avoid the use of redux observable
// 7. It is used to share the data between the components

// How to use contextAPI?
// 1. Create a context
// 2. Create a provider
// 3. Create a consumer
// 4. Wrap the component with the provider
// 5. Use the consumer to get the value from the provider


// context API does not make re-render the component if the value of the context is not changed


function App() {
  const [count, setCount] = useState(0);
  console.log("App redered")

  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </>
  );
}

function Count() {
  console.log("Count rendered")
  return (
    <>
      
      <CountRenderer />
      <Buttons />
    </>
  );
}



function CountRenderer() {

  const value = useContext(CountContext).count;
  console.log("CounterRenderer rendered")
  return <h1>{value}</h1>;
}


function Buttons() {
  const count = useContext(CountContext).count;
  const setCount = useContext(CountContext).setCount;
  console.log("Buttons rendered")
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}


export default App;
