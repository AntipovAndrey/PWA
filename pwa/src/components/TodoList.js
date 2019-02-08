import React from 'react';
import {connect} from 'react-redux';

import {addTodo, removeTodo, toggleTodo} from '../actions';
import TodoListItem from './TodoListItem';

const TodoList = props => (
  <>
    {props.todo.map(todo => createItem(todo, props.toggleTodo))}
  </>
);

const createItem = (todo, onToggled) => {
  return <TodoListItem key={todo.id}
                       todo={todo}
                       inToggled={() => onToggled(todo.id)}/>
};

const mapStateToProps = state => ({
  todo: Object.values(state.todo)
});

export default connect(mapStateToProps,
  {addTodo, toggleTodo, removeTodo}
)(TodoList);