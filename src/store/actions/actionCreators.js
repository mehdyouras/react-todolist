import {
  ADD_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  DELETE_TODO
} from "./actionTypes";

function makeActionCreator(type, ...argNames) {
  return function(...args) {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

export const addTodo = makeActionCreator(ADD_TODO, 'title');

export const updateTodo = makeActionCreator(UPDATE_TODO, 'id', 'title');

export const toggleTodo = makeActionCreator(TOGGLE_TODO, 'id');

export const deleteTodo = makeActionCreator(DELETE_TODO, 'id');