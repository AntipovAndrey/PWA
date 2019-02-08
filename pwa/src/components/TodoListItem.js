import React from 'react';

const TodoListItem = ({todo, onToggled}) => (
  <div>
    {todo.title}
  </div>
);

export default TodoListItem;