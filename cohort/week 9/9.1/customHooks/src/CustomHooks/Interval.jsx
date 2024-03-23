import { useEffect,useState } from "react"


function useInterval(callback,delay) {
    useEffect(() => {
        const intervalId = setInterval(() => {
            callback()
        }, delay);

        return () => {
            clearInterval(intervalId)
        }
    },[callback,delay])
}
export default function Interval() {
    const [timer, setTimer] = useState(0);
    useInterval(() => {
        setTimer(timer + 1)
    },1000)
  return (
    <div>
      my timer is {timer}
    </div>
  )
}

