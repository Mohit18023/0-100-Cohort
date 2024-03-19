import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { countAtom, isEvenSelector } from "./store/atoms/count";
//import { useMemo } from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <>
      <h1>{count}</h1>
      <EvenCountRenderer />
    </>
  );
}


function EvenCountRenderer() {
  //const count = useRecoilValue(countAtom);
 
  // normal way but not efficient
  // const isEven = count%2 == 0;

  // using useMemo
  // const isEven = useMemo(()=>{
  //   return count%2 == 0;
  // },[count])

  // using selector
  const isEven = useRecoilValue(isEvenSelector);

  
  return (
    <>
      <h3>{isEven ? "Even" : "Odd"}</h3>
    </>
  
  )
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default App;
