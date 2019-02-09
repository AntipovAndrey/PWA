import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter(t => t.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((item) => {
        if (item.id !== action.payload) {
          return item
        }
        return {...item, completed: !item.completed}
      });
    default:
      return state;
  }
};
