import queryString from 'query-string'

import {ADD_TODO} from '../actions/types';

const INITIAL_STATE = {todo: queryString.parse(document.location.search).todo};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state, todo: null};
    default:
      return state;
  }
};
