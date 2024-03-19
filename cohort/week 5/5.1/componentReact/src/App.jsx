import './App.css'
import PropTypes from 'prop-types';
import { useState } from 'react'


// state, componenet

export default function App() {
  const [count, setCount ] = useState(0);
  

  return (
    <div>
      <CustomButton count={count} setCount={setCount} />
    </div>
  )
}

// component
function CustomButton(props){
  const onClickHandler = () => {
    props.setCount(props.count + 1);
    
    console.log("clicked");
  };
  return (
    <button onClick={onClickHandler}>Counter : {props.count}</button>
  )
}
CustomButton.propTypes = {
  count: PropTypes.number.isRequired, // Ensure count is a number and is required
  setCount: PropTypes.func.isRequired, // Ensure setCount is a function and is required
};