
import './App.css'
import { RevenueCard } from './Components/RevenueCard';

function App() {

  return (
    <>
      <div className='grid grid-cols-3'>
          <RevenueCard orderCount={12} amount={100000} title={"Revenue"} />
      </div>
    </>
  );
}

export default App
