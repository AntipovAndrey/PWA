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

const onSubmit = (addTodo, reset, formValues) => {
  addTodo(formValues.todo);
  reset();
};

const AddTodo = ({addTodo, classes, handleSubmit, reset}) => {
  const onFormSubmit = onSubmit.bind(null, addTodo, reset);
  return (
    <form className={classes.form} onSubmit={handleSubmit(onFormSubmit)}>
      <Field name="todo" className={classes.textField} component={renderTodoTextField}/>
    </form>
  );
};

const styledAddTodo = withStyles(styles)(AddTodo);

const reduxFormAddTodo = reduxForm({
  form: 'addTodo',
  enableReinitialize: true
})(styledAddTodo);

const mapStateToPropsForm = state => ({
  initialValues: {todo: state.onetimeParameters.todo}
});

export default connect(mapStateToPropsForm, {addTodo})(reduxFormAddTodo);
