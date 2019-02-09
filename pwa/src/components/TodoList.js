import React from 'react';
import {connect} from 'react-redux';

import {removeTodo, toggleTodo} from '../actions';
import TodoListItem from './TodoListItem';

const TodoList = ({todo, toggleTodo, removeTodo}) => (
  <>
    {mapReversed(todo, t => createItem(t, toggleTodo, removeTodo))}
  </>
);

const mapReversed = (arr, cb) => arr.map((_, index) => cb(arr[arr.length - 1 - index]));

const createItem = (todo, onToggled, onRemoved) => {
  return <TodoListItem key={todo.id}
                       todo={todo}
                       onToggled={() => onToggled(todo.id)}
                       onRemoved={() => onRemoved(todo.id)}/>
};

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps,
  {toggleTodo, removeTodo}
)(TodoList);