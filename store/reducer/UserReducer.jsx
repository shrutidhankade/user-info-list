import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";



const initialState = {
    users: JSON.parse(localStorage.getItem("users")) || []
}


export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        createuser: (state, Action) => {
            state.users.push(Action.payload)
            localStorage.setItem("users", JSON.stringify(state.users))
        },
        deleteuser: (state, Action) => {
            state.users.splice(Action.payload,1)
            localStorage.setItem("users", JSON.stringify(state.users))


        }

    }
})


export const { createuser, deleteuser } = userSlice.actions;
export default userSlice.reducer;






















// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     users: JSON.parse(localStorage.getItem("users")) || [],
// };

// export const userSlice = createSlice({
//     name: "users",
//     initialState,
//     reducers: {
//         deleteuser: (state, action) => {
//             state.users.splice(action.payload, 1);
//             localStorage.setItem("users", JSON.stringify(state.users));
//         },
//         createuser: (state, action) => {
//             state.users.push(action.payload);
//             localStorage.setItem("users", JSON.stringify(state.users));
//         },
//         // actions
//     },
// });

// export const { deleteuser, createuser } = userSlice.actions;
// export default userSlice.reducer;