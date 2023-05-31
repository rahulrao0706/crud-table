import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const editUser = createAsyncThunk('users/edit', async (user) => {

    const response = await axios.put(` https://gorest.co.in/public-api/users/${user.id}`, user, {

        headers: {
            body: JSON.stringify,
            Authorization: 'Bearer 840233805f5da6e91fe8a8127f75cbe1a6e09f82867fe03646428336433ff2fd',


        },
    })
    return response.data;
});


export { editUser };
