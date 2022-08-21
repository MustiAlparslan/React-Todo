import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  todo: '',
  status: false,
  list: []
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action) => {
        state.todo = action.payload
    },
    setTodos: (state,action) => {
        state.todos.push(state.todo)
    },
    setList: (state,action) => {
        state.list([...state.todos])
    }
  },
});

export const {setTodo, setTodos, setList} = todoSlice.actions;

export default todoSlice.reducer;
