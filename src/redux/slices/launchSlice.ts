import { createSlice } from "@reduxjs/toolkit";

export interface LaunchState {
  launches: object;
}

const initialState: LaunchState = {
  launches: [],
};

export const launchSlice = createSlice({
  name: "launchSlice",
  initialState,
  reducers: {
    getAllLaunch(state, action) {},
  },
});

// Action creators are generated for each case reducer function
export const { getAllLaunch } = launchSlice.actions;

export default launchSlice.reducer;
