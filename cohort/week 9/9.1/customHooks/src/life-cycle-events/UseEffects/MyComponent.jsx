import { useEffect, useState } from "react";


function MyComponent() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender((r) => !r);
    }, 5000);
  }, []);

  return <>{render ? <Component /> : <div></div>}</>;
}

function Component() {
  useEffect(() => {
    console.error("component mounted");

    return () => {
      console.log("component unmounted");
    };
  }, []);

  return <div>From inside my component</div>;
}

export default MyComponent;


