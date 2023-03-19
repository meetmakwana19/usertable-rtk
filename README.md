## Redux Toolkit (RTK)

1. Official recommended approach for writing Redux logic
2. Simplifies your code and eliminates many common Redux mistakes and bugs!
3. A redux code of 100 lines could be written in 40-50 lines using RTK

#### Several ways of state management to avoid props drilling

1. ReacJS `useContext` Hook (Context API)
2. `useReducer` React Hook that lets you add a reducer to your component.
   1. dispatch
   2. reducer - This has 2 things : state & action
3. Redux
   1. Where RTK is an upgraded version of the redux

---

RTK benefits :

1. No need to create action's `{type : "xxx"}` in the dispatch method like legacy reduce.
2. In legacy reducer function, we used to check for action type using switch case for example. But here we create a slice with a name, initialState and a big reducer. The single big reducer can have multiple micro reducers.
3. Creation of slice gives us automatically created `actionCreator` for redux
4. Micro reducers automatically creation action types for condition checking

---

#### Project Steps :

1. Create react app using `vite`. Vite is a JavaScript build tool that simplifies how you build your front-end web applications. Vite is made to speed up the build process and aims to provide a faster development experience for modern web apps.

```
npm create vite
```

Choose react and javascript upon configuration 2. `npm install` 3. To run the app

```
npm run dev
```

4. In `App.jsx`, cleared the boilercode and wrote code using `rafce`
5. Installed npm `styled-components` using

```
npm i styled-components
```

6. Installed RTK using npm

```
npm i @reduxjs/toolkit
```

7. Also, need to install react-redux to bind redux with our react app

```
npm i react-redux
```

8. Also react-icons

```
npm i react-icons
```

9. Added Navbar, UserDetails and DeleteAllUser components to the App
10. Changed CSS in the index.css and imported styled-components lib in the UserDetails.jsx

---

### V3 - Create slice in RTK

1. Can understand slice as a part of the reduxx store
   1. Like a slice of a mango will be a small part of mango but all slices joint together will form a complete mango
   2. Means small parts of a global centralised store are known as slices
2. Similar type of jobs can be done by binding them inside a slide but different types of works which are not related to each other those are made in each different slice.
3. For example, 3 functions of Creating, deleting and deleting all users is related to the usersDetails only so will create a single slice of `userDetails`.
   1. So will add those 3 functionalities inside the slice as reducers.
   2. 3 actions inside a single slice are accessing the redux store.
4. Slices can also be defined as part of redux state.
5. Redux state is typically organized into "slices", defined by the reducers that are passed to combineReducers

```
import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import postsReducer from './postsReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
})
```

[Docs Ref.](https://redux-toolkit.js.org/usage/usage-guide#creating-slices-of-state)

6. In this example, both `users` and `posts` would be considered "slices". Both of the reducers:
   1. "Own" a piece of state, including what the initial value is
   2. Define how that state is updated
   3. Define which specific actions result in state updates
7. Made `src\store\slices\UserSlice.jsx`

---

### V4 - Create store

1. Creating store using **`configureStore`**
   1. A friendly abstraction over the standard Redux `createStore` function that adds good defaults to the store setup for a better development experience.
2. This created store object can have multiple functions passed in the `configureStore`. For a reducer function passed inside it :
   1. If a single function is passes then it'll be directly used as the root reducer for the store
   2. If there are multiple slices like {users: usersReducer, posts: postsReducer}, then it'll work as the combineReducers() to create the root reducer by passing this object to the Redux combineReducers utility.

```
const store = `configureStore`({
  reducer: {
    users: userSlice.reducer
  },
});
```

### V5 - Connect store to react

- Summary :

1. **Create a Redux store** with `configureStore` in the `src\store\index.jsx`
   1. `configureStore` accepts a reducer function as a named argument
   2. `configureStore` automatically sets up the store with good default settings
2. **Provide the Redux store to the React application components**
   1. Put a React-Redux `<Provider>` component around your `<App />` in the `main.jsx`
   2. Pass the Redux store which was created in the `src\store\index.jsx` as `<Provider store={store}>`
3. Create a Redux "slice" reducer with `createSlice`
   1. Call `createSlice` with a string name, an initial state, and named reducer function
   2. Reducer functions may "mutate" the state using Immer
   3. Export the generated slice reducer and action creators
4. Use the React-Redux `useSelector/useDispatch` hooks in React components
   1. Read data from the store with the `useSelector` hook
   2. Get the dispatch function with the `useDispatch` hook, and dispatch actions as needed

---

### V6 - Call and Update state data

1. Added an onclick function on the Add new users btn
2. Installed npm Chance - Random generator helper for JavaScript

```
npm i chance
```

3. Created a file for fetching data from the chance api in `src\chance_api\index.js`
4. Wrote code to addUssers in the UserSlice.jsx and sent data to it from the add btn from UserDetails
5. Exported addUser mini reducer from the UserSlice and imported it into the UserDetails component
6. So in short on btn click on the frontend component of UserDetails, `dispatch()` sends that payload to the userSlice which checks the payload type and sends it to approriate mini reducer which processes the payload

---

- If there's any data on the frontend which needs to be updated in the store so to **update the state data** 2 imp steps are :
  - Import `useDispatch()` hook from react-redux to trigger action method
  - Action creators
- RTK by default uses `Immer` which simplifies the process of writing immutable update logic and there's no tension of data getting mutated upon the update actions

---

### V7 - Access and display user data using `useSelector()`

1. Made DisplayUsers component
2. Need to use useSelector() hook to access data
   1. The (state) represents complete store data of the store including `reducer{ users: { } }` thats y accessing it like `state.users`
   2. Whereas the `(state)` or `state.push` in the createSlice function means the state of that slice only and not comlete store data
3. Map the store state in the frontend

---

### V8 - Delete a single user from state

1. Added delete button in `DisplayUsers` component and used `MdDeleteForever` from react-icons.
2. So our motive is to delete the specific user upon `onClick` on the button and then `dispatch` an action from the `DisplayUsers` component. Then to check the action in the `userSlice` for `removeUser`(state, action)
3. Can easily call/access the any micro-reducer of a slice using `dispatch`

IMP NOTE :

```
RTK gives us Immer under the hood.

Means anything mutating/changing our state, it'll handle it properly
```

4. Using `splice()` to delete user from the array of users means using javascript's splice to delete `id` indexed user element
5. Can use `(user)` too instead of `(id)` and pass use to the micro-reducer but will need to add one more extra line to get id from user like `let userIndex = state.indexOf(action.payload)`

### V9 - Delete all users using empty array

1. Populated UI of the `DeleteAllUser.jsx` component
2. returned `[]` initialState in the the `deleteUsers(state, action)` micro-reducer of the userSlice.
