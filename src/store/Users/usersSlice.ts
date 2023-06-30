import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { fetchUsers } from "../../api/user";

interface User {
  id: number;
  name: string;
  // Add other user properties here
}

interface UsersState {
  users: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  status: "idle",
  error: null,
};

export const getUsers = createAsyncThunk(
  "products/fetchLatestProducts",
  async () => {
    const response = await fetchUsers();
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

// export const selectAllProducts = (state: RootState) => state.products.products;
// export const selectProductById = (state: RootState, userId: number) =>
//   state.products.products.find((user) => user.id === userId);

// export default productsSlice.reducer;
