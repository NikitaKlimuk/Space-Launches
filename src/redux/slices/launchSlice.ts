import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiBase from "../api";

export interface LaunchState {
  launches: any;
  status: "idle" | "loading" | "resolved" | "rejected";
  error: any;
}

const initialState: LaunchState = {
  launches: [],
  status: "idle",
  error: null,
};

export const fetchAllLaunches = createAsyncThunk(
  "launches/fetchAllLaunches",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(`${apiBase.dev}2.2.0/launch/`);

      if (!response.ok) {
        throw new Error("ServerError!");
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchLaunch = createAsyncThunk(
  "launches/fetchLaunch",
  async function (id: string, { rejectWithValue }) {
    try {
      const response = await fetch(`${apiBase.dev}2.2.0/launch/${id}`);

      if (!response.ok) {
        throw new Error("ServerError!");
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const launchSlice = createSlice({
  name: "launchSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllLaunches.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAllLaunches.fulfilled, (state, action) => {
        state.status = "resolved";
        state.launches = action.payload;
      })
      .addCase(fetchAllLaunches.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
    builder
      .addCase(fetchLaunch.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchLaunch.fulfilled, (state, action) => {
        state.status = "resolved";
        state.launches = action.payload;
      })
      .addCase(fetchLaunch.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
// export const {  } = launchSlice.actions;

export default launchSlice.reducer;
