import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer
        
    }
})

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/deleteUser';
export * from './thunks/editUser';
export * from './thunks/showUser';
