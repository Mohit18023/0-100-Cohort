import propTypes from 'prop-types';
import { useCallback } from 'react';
import { memo } from 'react';
export default function CallBack() {

    // Native function it will render every time ew-render happens because it is a new function i.e reference is changed
    // const onClick = () => {
    //     console.log('clicked');
    // }

    // using useCallback hook to prevent re-rendering of function onClick 
    // it will only re-render when the dependency changes
    // in this case it will not re-render because there is no dependency    
    const onClick = useCallback(()=>{
        console.log('clicked');
    
    },[])

  return (
    <div>
        <Child onClick={onClick}/>
    </div>
  )
}


const Child = memo(({onClick})=>{
    console.log('child rendered');
    return(
        <div>
            <button onClick={onClick}>Click</button>
        </div>
    )
})

// Display name 
Child.displayName = 'Child';

// props validation
Child.propTypes = {
    onClick: propTypes.func
}