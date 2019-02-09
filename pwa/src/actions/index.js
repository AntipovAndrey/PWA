import uuid from 'uuid';
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './types';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: {
    id: uuid(),
    date: new Date(),
    title: todo,
    completed: false
  }
});

export const toggleTodo = todoId => ({type: TOGGLE_TODO, payload: todoId});

export const removeTodo = todoId => ({type: REMOVE_TODO, payload: todoId});
