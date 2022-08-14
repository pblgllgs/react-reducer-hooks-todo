import React, { useEffect } from 'react';
import { useTodo } from '../hooks';
import { TodoList, TodoAdd } from './';

export const TodoApp = () => {
  const { todos, handleDeleteTodo, handleToggleTodo, onHandleTodo } = useTodo();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>
        TodoApp({todos.length})<span>pendientes:{}</span>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr />
          <TodoAdd onNewTodo={onHandleTodo} />
        </div>
      </div>
    </>
  );
};
