import React from 'react'

function Jokes(props){

  return(
    <div className='joke'>
      <p style={{display: !props.question && 'none'}}>
        Question: {props.question}</p>
      <p style={{display: !props.answer && 'none', color:!props.question && 'rgb(73, 71, 71)' }}>
        Answer: {props.answer}</p>
    </div>
  )
}

export default Jokes