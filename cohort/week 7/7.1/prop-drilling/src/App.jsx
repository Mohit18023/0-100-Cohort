import { useState } from "react";
import propTypes from "prop-types";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count count={count} setCount={setCount} />
    </>
  );
}

function Count({ count, setCount }) {
  return (
    <>
      <h1>{count}</h1>
      <Buttons count={count} setCount={setCount} />
    </>
  );
}

Count.propTypes = {
  count: propTypes.number.isRequired,
  setCount: propTypes.func.isRequired,
};

function Buttons({ count, setCount }) {
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
