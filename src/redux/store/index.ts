import { configureStore } from "@reduxjs/toolkit";
import launchReducer from "../slices/launchSlice";

export const store = configureStore({
  reducer: {
    launches: launchReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
