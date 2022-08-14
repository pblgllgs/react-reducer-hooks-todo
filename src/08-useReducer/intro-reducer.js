export const initialState = [
  {
    id: 1,
    todo: 'recolectar la piedra del alma',
    done: false,
  },
];

export const todoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD-TODO':
      return [...state, action.payload]
    default:
      return state;
  }
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Chasquear los dedos',
  done: false,
};

const action = {
  type: 'ADD-TODO',
  payload: newTodo,
};

todos = todoReducer(todos, action);

console.log(todos);
