import React, { useRef } from 'react'

const Counter = () => {

    const ref = useRef(null);

    const handleClick = () => {
        ref.current = ref.current + 1;

        console.log('You click me '+ ref.current+' times ')
    }
  return (
    <div>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Counter