import React from 'react';

const TodoListItem = ({todo, onToggled, onRemoved}) => (
  <div
    style={{
      marginTop: '20px',
      marginBottom: '20px',
      textDecorationLine: todo.completed ? 'line-through' : ''
    }}
    onClick={onToggled}>
    <span onClick={e => {
      e.preventDefault();
      onRemoved();
    }}> [x] </span>
    {todo.title}
  </div>
);

export default TodoListItem;