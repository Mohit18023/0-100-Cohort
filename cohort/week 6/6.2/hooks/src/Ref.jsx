import { useEffect, useRef } from "react"
const Ref = () => {
    const divRef = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            divRef.current.innerHTML = 10;
        },5000);
    },[])
    const incomeTax = 1000;
  return (
    <div>
        hi there , your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default Ref
