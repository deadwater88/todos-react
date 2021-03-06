import {REMOVE_TODO, RECEIVE_TODOS, RECEIVE_TODO, receiveTodos, receiveTodo} from "../actions/actions.js";
import merge from 'lodash/merge';

const initialState = {
  1: {
      id: 1,
      title: "take a shower",
      body: "and be clean",
      done: false
    },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action)=> {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo;
      return newState;
    case REMOVE_TODO:
     delete newState[action.todo.id];
     return newState;
    default:
      return state;
  }
};

export default todosReducer;
