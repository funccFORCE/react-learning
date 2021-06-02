import React from "react"

function ContentCard(props){
  return(
    <div className="content-card">
      <h3 className='content-title'><b>{props.title}</b></h3>
      <img src={props.source} className='content-img' alt='' />
      <div className='content-direction'>Direction: <b>{props.direction}</b></div>
    </div>
  )
}


export default ContentCard
