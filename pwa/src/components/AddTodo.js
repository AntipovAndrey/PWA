import React from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import {addTodo} from '../actions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%'
  },
  form: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
  },
});

const AddTodo = ({addTodo, classes}) => {
  let input;
  return (
    <form
      className={classes.form}
      onSubmit={e => {
        e.preventDefault();
        if (input.value.trim()) {
          addTodo(input.value);
          input.value = '';
        }
      }}>

      <TextField
        id="outlined-with-placeholder"
        label="Enter todo here"
        placeholder="Todo"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        inputRef={node => (input = node)}/>
    </form>
  );
};

export default connect(null, {addTodo})(withStyles(styles)(AddTodo));
