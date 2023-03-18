import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [], //empty array for a series of users
  // big reducer which will have micro reducers
  reducers: {
    addUser(state, action) {},
    removeUser(state, action) {},
    deleteUsers(state, action) {},
  },
});

// .actions gives us actionCreators
console.log(userSlice.actions);
console.log(userSlice);

export { userSlice };
// export default userSlice.reducers; //if need to write just { users : userSlice } instead of { users : userSlice.reducers } in the configureStore functioon of the index.jsx
