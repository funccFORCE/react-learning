import React from 'react';
import todoInfo from './todoInfo'
import TodoItem from './TodoItem';

function TodoList () {
  const todo= todoInfo.map(
    item => <TodoItem id={item.id} text={item.text} check= {item.completed && 'true'} /> )
  return (
<div className='todo-list'> 
  <h3 className='head'>To-Do List </h3>
  {todo}
</div>
  )
}
export default TodoList;
