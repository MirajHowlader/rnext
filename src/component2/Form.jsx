import React, { useRef } from 'react'

const Form = () => {
    const inpuRef = useRef(null);

    const handleFoucs = () => {
        inpuRef.current.focus();
    }
  return (
    <div>
        <input  ref={inpuRef}/><br/>
        <button onClick={handleFoucs}>Focus the input</button>
    </div>
  )
}

export default Form