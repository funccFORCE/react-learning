import React from 'react';
import TodoItem from './TodoItem';

function TodoList () {
  return (
<div className='todo-list'> 
  <h3>To-Do List </h3>
  <TodoItem />
  <TodoItem />
  <TodoItem />
</div>
  )
}
export default TodoList;