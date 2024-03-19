import { useState } from "react";
import propTypes from "prop-types";
import "./App.css";
import { CountContext } from "./Context";
import { useContext } from "react";
//  if you wanna use the the value from the contextAPI you can use it by wrapping that component  with the context provider

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </>
  );
}

function Count() {
  return (
    <>
      <CountRenderer />
      <Buttons />
    </>
  );
}

Count.propTypes = {
  count: propTypes.number.isRequired,
  setCount: propTypes.func.isRequired,
};

function CountRenderer() {
  const value = useContext(CountContext).count;
  return <h1>{value}</h1>;
}
CountRenderer.propTypes = {
  count: propTypes.number.isRequired,
};

function Buttons() {
  const count = useContext(CountContext).count;
  const setCount = useContext(CountContext).setCount;
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

Buttons.propTypes = {
  count: propTypes.number.isRequired,
  setCount: propTypes.func.isRequired,
};

export default App;
