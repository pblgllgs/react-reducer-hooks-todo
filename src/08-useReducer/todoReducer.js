export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] ADD-TODO':
      return [...initialState, action.payload];
    case '[TODO] REMOVE-TODO':
      return initialState.filter((item) => item.id !== action.payload);
    case '[TODO] TOGGLE':
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
