import React from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../actions';

const AddTodo = ({addTodo}) => {
  let input;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (input.value.trim()) {
          addTodo(input.value);
          input.value = '';
        }
      }}>
      <label htmlFor="title">
        Title:
        <input id="title" ref={node => (input = node)}/>
      </label>

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default connect(null, {addTodo})(AddTodo);
