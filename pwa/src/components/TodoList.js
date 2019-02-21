import React from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import {removeTodo, toggleTodo} from '../actions';
import TodoListItem from './TodoListItem';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    margin: 10,
  },
});

const TodoList = ({todo, toggleTodo, removeTodo, classes}) => {
  if (!todo.length) {
    return null;
  }
  return (
    <List className={classes.root}>
      {mapReversed(todo, t => createItem(t, toggleTodo, removeTodo))}
    </List>
  );
};

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
)(withStyles(styles)(TodoList));
