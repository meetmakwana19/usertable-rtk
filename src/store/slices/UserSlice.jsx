import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsersImport } from "../actions";

const userSlice = createSlice({
  name: "user",
  initialState: [], //empty array for a series of users
  // big reducer which will have micro reducers
  reducers: {
    // micro-reducer functions

    // when add btn will be clicked the data  from api will be set as state in the frontend
    addUser(state, action) {
      console.log("Payload recieved : ", action.payload);
      // adding the input state payload into the state
      state.push(action.payload);
    },
    removeUser(state, action) {
      console.log(
        "removeUser() micro-reducer called ! currrent user id -> ",
        action.payload
      );
      // deleting user
      // state.pop(action.payload); //this will work like a stack fo this is not needed

      // let userIndex = state.indexOf(action.payload)

      // using javascript's splice to delete id indexed element
      // state.splice(userIndex, 1);
      state.splice(action.payload, 1);
    },

    // writing this deleteUsers micro-reducer is essential as the extraReducer is using it
    deleteUsers(state, action) {
      console.log("deleteUsers micro reducers");

      //assigning a new empty array to the state which is wrong
      // return (state = []);

      // so returning the initialState as it was empty earlier
      return [];
    },
  },
  extraReducers(builder) {
    // builder had addCase method which has it's 2nd arg as a callback function

    // clearAllUsersImport is createAction's method to use action type : deleteUsersType so no need to depend on  userSlice
    builder.addCase(clearAllUsersImport, () => {
      // builder.addCase(userSlice.actions.deleteUsers, () => {
      return [];
    });
  },
});

// .actions gives us actionCreators
console.log(userSlice.actions);
console.log(userSlice);

export { userSlice };
// export default userSlice.reducers; //if need to write just { users : userSlice } instead of { users : userSlice.reducers } in the configureStore functioon of the index.jsx
export const { addUser, removeUser, deleteUsers } = userSlice.actions;
