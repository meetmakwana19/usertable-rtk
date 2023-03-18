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
