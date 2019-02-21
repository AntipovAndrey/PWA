import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const styles = theme => ({
  completed: {
    textDecorationLine: 'line-through',
  },
  trash: {
    marginRight: 10,
  }
});

const TodoListItem = ({todo, onToggled, onRemoved, classes}) => (
  <ListItem key={todo.id} button dense onClick={onToggled}>
    <Checkbox
      checked={todo.completed}
      tabIndex={-1}/>
    <Typography
      className={todo.completed ? classes.completed : null}
      color={todo.completed ? "textSecondary" : "inherit"}
      variant="subtitle1">
      {todo.title}
    </Typography>
    <ListItemSecondaryAction>
      <IconButton onClick={() => setTimeout(onRemoved, 250)} className={classes.trash} aria-label="Delete">
        <DeleteIcon/>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default withStyles(styles)(TodoListItem);