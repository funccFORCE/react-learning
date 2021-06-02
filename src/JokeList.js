import React from 'react'
import Jokes from './Jokes'

function JokeList(){
  return(
    <div className="joke-list text-left">
      <h2 className='head'>Jokes (please laugh)</h2>
      <Jokes question='Hear about the new restaurant called Karma?' 
        answer='There’s no menu: You get what you deserve.' />
      <Jokes
        question='' 
        answer='The actor who fell through the floorboards was just going through a stage.' />
    </div>
  )
}

export default JokeList