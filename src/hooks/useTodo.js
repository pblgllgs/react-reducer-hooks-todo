import { useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const initialState = [];

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const onHandleTodo = (todo) => {
    const action = {
      type: '[TODO] ADD-TODO',
      payload: todo
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] REMOVE-TODO',
      payload: id
    });
  };

  const handleToggleTodo = (id) => {
    console.log(id);
    dispatch({
      type: '[TODO] TOGGLE',
      payload: id
    });
  };
  return {
    todos,
    onHandleTodo,
    handleDeleteTodo,
    handleToggleTodo
  };
};
