import React from 'react';

function TodoItem (props) {

  return(
<div className='todo-item text-left'>
  <input type='checkbox' checked={props.check} />
  <span>{props.text}</span> 
</div>
  )
}
export default TodoItem;