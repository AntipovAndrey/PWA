import React from 'react';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import GitHubLink from './GitHubLink';

const App = () => (
  <>
    <GitHubLink/>
    <AddTodo/>
    <TodoList/>
  </>
);

export default App;
