import React from 'react';

function TodoItem () {

const itemStyle = {color:'#1e2417'}
  return(
<div className='todo-item' style={itemStyle}>
  <input type='checkbox'/>
  <span >A task to be done</span> 
</div>
  )
}
export default TodoItem;