import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../helpers/requests";

const initialState = {
  accaunts: [],
  status: "idle",
  error: "",
};

export const fetchAccaunts = createAsyncThunk("accaunts", async () => {
  const response = await getRequest("accounts");
  return response.data;
});

export const accauntSlice = createSlice({
  name: "accaunts",
  initialState,
  reducers: {
    // addAccauntState: (state, action) => {
    //   state.accaunts.push(action.payload);
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAccaunts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccaunts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.accaunts = state.accaunts.concat(action.payload);
      })
      .addCase(fetchAccaunts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { addAccauntState } = accauntSlice.actions;

export const selectAllAccaunts = (state) => state.accaunt.accaunts;
export const credits = (state) =>
  state.accaunt.accaunts.filter((ac) => ac.type === "credit");
export const debits = (state) =>
  state.accaunt.accaunts.filter((ac) => ac.type === "debit");

export const sum = (state) => {
  return state.accaunt.accaunts.reduce((acc, curr) => {
    if (curr.type === "debit") return acc + curr.amount;
    else return acc - curr.amount;
  }, 0);
};
export const debitsSum = (state) => {
  return state.accaunt.accaunts.reduce((acc, curr) => {
    if (curr.type === "debit") return acc + curr.amount;
    else return acc;
  }, 0);
};
export const creditsSum = (state) => {
  return state.accaunt.accaunts.reduce((acc, curr) => {
    if (curr.type === "credit") return acc + curr.amount;
    else return acc;
  }, 0);
};

export default accauntSlice.reducer;
