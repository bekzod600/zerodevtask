import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "../helpers/requests";

const initialState = {
  accaunts: [],
  status: "idle",
  error: "",
};

export const fetchAccaunts = createAsyncThunk("accaunts", async (payload) => {
  const response = await getRequest(`accounts?user=${payload ? payload : ""}`);
  return response.data;
});
export const addAccaunt = createAsyncThunk("addAccaunt", async (payload) => {
  const response = await postRequest("accounts", payload);
  return response.data;
});
export const updAccaunt = createAsyncThunk("updAccaunt", async (payload) => {
  const response = await patchRequest(`accounts/${payload.id}`, payload.data);
  return response.data;
});
export const delAccaunt = createAsyncThunk("delAccaunt", async (payload) => {
  console.log(`accounts/${payload}`);
  const response = await deleteRequest(`accounts/${payload}`);
  return response.data;
});

export const accauntSlice = createSlice({
  name: "accaunts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAccaunts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccaunts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accaunts = state.accaunts.concat(action.payload);
      })
      .addCase(fetchAccaunts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(delAccaunt.fulfilled, (state, action) => {
        console.log("h2");
        state.accaunts = state.accaunts.filter(
          (acc) => acc.id !== action.payload.id
        );
      })
      .addCase(addAccaunt.fulfilled, (state, action) => {
        state.accaunts = state.accaunts.concat(action.payload);
      })
      .addCase(updAccaunt.fulfilled, (state, action) => {
        state.accaunts = state.accaunts.map((acc) => {
          return acc.id === action.payload.id ? action.payload : acc;
        });
      });
  },
});

export const selectAllAccaunts = (state) => {
  return state.accaunt.accaunts;
};
export const credits = (state) => {
  return state.accaunt.accaunts.filter((ac) => ac.type === "credit");
};
export const debits = (state) => {
  return state.accaunt.accaunts.filter((ac) => ac?.type === "debit");
};

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
