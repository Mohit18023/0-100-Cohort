import {useState, useEffect} from 'react';


const useMousePointer= () => {
    const [position, setPosition] = useState({x:0,y:0});

    const handleMousePOinter = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMousePOinter);

        return () =>{
            window.removeEventListener('mousemove', handleMousePOinter)
        }
    },[]);
    return position;
}

export default function MousePOinter() {
    const mousePOinter = useMousePointer();
  return (
    <div>
      Your mouse position is x: {mousePOinter.x} and y: {mousePOinter.y}
    </div>
  )
}
