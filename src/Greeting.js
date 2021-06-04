import { getByDisplayValue } from '@testing-library/dom'
import React from 'react'

class Greeting extends React.Component{
  render() {
    return (
        <Day />
    )
}}

class Day extends React.Component {
  
  render() {
      const date = new Date();
      const hours = date.getHours();
      let timeOfDay
      let src
      
      if (hours < 12) {
          timeOfDay = "morning"
          src='https://images.unsplash.com/photo-1454916286212-0ea211dc68d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vcm5pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
      } else if (hours >= 12 && hours < 17) {
          timeOfDay = "afternoon"
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNU0dKYI8EFYIRoWFNP6mFv39haZad5ZpjA&usqp=CAU'
      } else {
          timeOfDay = "night"
          src='https://images.unsplash.com/photo-1599939571322-792a326991f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
      }
      return (
        <div className='greeting'>
          <h3> It's a beautiful {timeOfDay} today!</h3>
          <img src={src} /> 
        </div>
      )
  }
}

export default Greeting

