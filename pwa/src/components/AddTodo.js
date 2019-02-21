import React from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Field, reduxForm} from 'redux-form';

import {addTodo} from '../actions';

const styles = {
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
};

const renderTodoTextField = ({input, ...other}) => (
  <TextField
    id="outlined-with-placeholder"
    label="Enter todo here"
    placeholder="Todo"
    margin="normal"
    variant="outlined"
    autoComplete="off"
    {...input}
    {...other}/>
);

const AddTodo = ({addTodo, classes, handleSubmit, reset}) => {
  return (
    <form className={classes.form} onSubmit={handleSubmit(formValues => {
      if (formValues.todo) {
        addTodo(formValues.todo);
        reset();
      }
    })}>
      <Field name="todo"
             className={classes.textField}
             component={renderTodoTextField}/>
    </form>
  );
};

export default connect(null, {addTodo})(reduxForm({
  form: 'addTodo'
})(withStyles(styles)(AddTodo)));
