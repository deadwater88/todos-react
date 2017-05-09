// export const initialize = "initialize";
// export const addUpdate = "add_update";
import APIUtils from '../util/todo_api_util';
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

// export const initializeStore = (todos)=> ({
//   type: initialize,
//   todos: todos
// });
//
// export const modifyTodo = (todo) => ({
//   type: addUpdate,
//   todo: todo
// });

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos: todos
});

export const receiveTodo = (todo) => ({
    type: RECEIVE_TODO,
    todo: todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo: todo
});


export const fetchTodos = () => (dispatch)=> {
  return APIUtils.fetchAllTodos().then((todos)=>{
     return dispatch(receiveTodos(todos));
  });
};

export const createTodo = (todo) => (dispatch) => {
  return APIUtils.createTodo(todo).then((_todo)=>{
    return dispatch(receiveTodo(_todo));
  });
};
