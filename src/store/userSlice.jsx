import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../helpers/requests";

const authUser =
  localStorage.getItem("authUser") !== null
    ? JSON.parse(localStorage.getItem("authUser"))
    : {};

const initialState = {
  users: [],
  authenticatedUser: authUser,
  status: "idle",
  error: "",
};

export const fetchUsers = createAsyncThunk("users", async () => {
  const response = await getRequest("users");
  return response.data;
});
export const addUser = createAsyncThunk("users", async (payload) => {
  const response = await postRequest("users", payload);
  return response.data;
});

export const accauntSlice = createSlice({
  name: "accaunts",
  initialState,
  reducers: {
    // addAccauntState: (state, action) => {
    //   state.accaunts.push(action.payload);
    // },
    addAuthUser: (state, action) => {
      state.authenticatedUser = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = state.users.concat(action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { addAuthUser } = accauntSlice.actions;

export const selectAllAccaunts = (state) => state.user.users;

export default accauntSlice.reducer;
