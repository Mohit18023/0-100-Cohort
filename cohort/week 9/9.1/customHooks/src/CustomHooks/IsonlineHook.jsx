import { useState } from "react";
import { useEffect } from "react";

const useIsONline = () =>{
    const [online, setOnline] = useState(window.navigator.onLine)
    useEffect(() => {
        window.addEventListener('online',() => setOnline(true))
        window.addEventListener('offline',() => setOnline(false))
    },[]);

    return online;
}

export default function IsonlineHook() {
  const online = useIsONline();
  return (
    <div>
      {online? <h1>Online</h1>:<h1>Offline</h1>}
    </div>
  )
}
