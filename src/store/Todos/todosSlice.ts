import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Todo {
  id: number;
  name: string;
  // Add other user properties here
}

interface TodosState {
  todos: Todo[];
  //   status: "idle" | "loading" | "succeeded" | "failed";
  //   error: string | null;
}

const initialState: TodosState = {
  todos: [],
  //   status: "idle",
  //   error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id === action.payload);
    },
    deleteAllTodos: (state, action) => {
      state.todos = [];
    },
  },
});

// export const selectAllProducts = (state: RootState) => state.products.products;
// export const selectProductById = (state: RootState, userId: number) =>
//   state.products.products.find((user) => user.id === userId);

export const { addTodo, removeTodo, deleteAllTodos } = todosSlice.actions;
export default todosSlice.reducer;
