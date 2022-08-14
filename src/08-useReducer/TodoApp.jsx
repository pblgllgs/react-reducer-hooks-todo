import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';


export const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar piedra del alma'
  },
  {
    id: new Date().getTime()*3,
    description: 'Recolectar piedra del tiempo'
  }
];

export const TodoApp = () => {

    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <ul>
        {
          state.map( (item) => {
            return <li key={item.id}>{item.description}</li>
          })
          }
      </ul>
    </>
  );
};
