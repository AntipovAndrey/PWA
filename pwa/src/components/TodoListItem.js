import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  completed: {
    textDecorationLine: 'line-through',
  },
});

const TodoListItem = ({todo, onToggled, onRemoved, classes}) => (
  <ListItem key={todo.id} button onClick={onToggled}>
    <Checkbox
      checked={todo.completed}
      tabIndex={-1}
      disableRipple/>
    <Typography className={todo.completed ? classes.completed : null} variant="subheading" color="inherit">
      {todo.title}
    </Typography>
  </ListItem>
);

export default withStyles(styles)(TodoListItem);