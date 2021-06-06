import React, {useEffect, useState} from "react"
import randomColor from 'randomcolor'

function Hooks() {
  const [count,setCount] = useState(0);
  const [color,setColor] = useState('');
  function increment(){
    setCount(prevCount=>prevCount+1)
  }
  useEffect(
    ()=>{ setColor(randomColor)},
    [count]
  )

  return (
      <div className='hooks'>
          <h1 style={{backgroundColor:color}}>{count}</h1>
          <button onClick={increment}>Increment</button>
      </div>
  )
}

export default Hooks