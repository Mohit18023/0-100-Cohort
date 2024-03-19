import {useState, useMemo} from 'react';

export default function Memo() {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);


    let sum = useMemo(()=>{
        let s =0;
        for(let i=1; i<=number; i++){
            s+=i;
        }
        return s;
    },[number])
  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>sum is {sum}</p>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
    </div>
  );
}
