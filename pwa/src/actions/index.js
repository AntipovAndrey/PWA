import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './types';

export const addTodo = todo => ({type: ADD_TODO, payload: todo});

export const toggleTodo = todoId => ({type: TOGGLE_TODO, payload: todoId});

export const removeTodo = todoId => ({type: REMOVE_TODO, payload: todoId});
