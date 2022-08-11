export const todoListSelector = (state) => {
  const todos = state.todoList;
  const todosRemaining = todos.filter((todo) => {
    return todo.name.toLowerCase().includes(state.filters.search.toLowerCase());
  });

  return todosRemaining;
};

export const searchTextSelector = (state) => state.filters.search;
