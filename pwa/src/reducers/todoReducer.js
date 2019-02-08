import _ from 'lodash';
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from '../actions/types';

const INITIAL_STATE = {
  1: {
    id: 1,
    title: 'sample',
    completed: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state, [action.payload.id]: action.payload};
    case REMOVE_TODO:
      return _.omit(state, action.payload);
    case TOGGLE_TODO:
      const todo = state[action.payload.id];
      todo.completed = !todo.completed;
      return {...state, [action.payload.id]: todo};
    default:
      return state;
  }
};
