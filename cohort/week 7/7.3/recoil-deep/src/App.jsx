import './App.css'

import { useRecoilValue, useRecoilState } from 'recoil'
import { jobCountAtom, messageCountAtom, networkAtom, notificationAtom, totalSelector } from './store/atoms/atom';

function App() {
  const network = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobCountAtom);
  const [messageCount,setMessageCount] = useRecoilState(messageCountAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  
  // total = network + jobCount + messageCount + notificationCount
  // we can achieve this using selector and memoization
  
  // this is the selector
  const total = useRecoilValue(totalSelector);

  // this is the memo approach
  // const totalMemo = useMemo(()=>{
  //   return network + jobCount + messageCount + notificationCount
  // },[network,jobCount,messageCount,notificationCount])

  // both are optimal and works the same 

  return (
    <>
      <button>Home</button>
      <button>Network {network>99?"99+":network}</button>
      <button>jobs {jobCount}</button>
      <button>Messages {messageCount}</button>
      <button>Notification {notificationCount}</button>
      <button
        onClick={
          () => setMessageCount(messageCount+1)
        }
      >Me {total}</button>
    
    </>
  )
}


export default App
