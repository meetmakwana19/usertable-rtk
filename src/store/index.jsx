import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice";

const store = configureStore({
  // if a single function is passes then it'll be directly used as the root reducer for the store
  // If there are multiple slices like {users: usersReducer, posts: postsReducer},  then it'll work as the combineReducers() to create the root reducer by passing this object to the Redux combineReducers utility.
  reducer: {
    // slice1 - userSlice which is a big reducer containing multiple micro-reducers will be passed onto the access to store via this combineReducing functionality
    users: userSlice.reducer, //reducers:{} is accessed of the userSlice method of the UserSlice.jsx file
    // users: userSlice, //if exporting default userSlice.reducers from the UserSlice.jsx
  },
});

export default store;
