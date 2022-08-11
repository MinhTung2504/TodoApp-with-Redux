const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    {
      id: 1,
      name: "Learn React",
      completed: true,
      priority: "High",
    },
    { id: 2, name: "Learn Redux", completed: true, priority: "Medium" },
    { id: 3, name: "Learn Node", completed: true, priority: "Low" },
  ],
};

const rootReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    default:
      return state;
  }
};

export default rootReducer;
