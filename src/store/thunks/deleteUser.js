import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk('users/delete', async (user) => {
    await axios.delete(`https://gorest.co.in/public/v2/users/${user.id}`, {
        headers: {
            Authorization: 'Bearer 840233805f5da6e91fe8a8127f75cbe1a6e09f82867fe03646428336433ff2fd',
        }
    })


    return user;
})

export { deleteUser };