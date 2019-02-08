import {ADD_TODO, TOGGLE_TODO, GET_SAVED_TODO, REMOVE_TODO} from './types';

export const getSavedTodos = () => ({type: GET_SAVED_TODO});

export const addTodo = todo => ({type: ADD_TODO, payload: todo});

export const toggleTodo = todoId => ({type: TOGGLE_TODO, payload: todoId});

export const removeTodo = todoId => ({type: REMOVE_TODO, payload: todoId});
