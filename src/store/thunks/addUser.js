import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addUser = createAsyncThunk('users/add', async (user) => {

    const response = await axios.post('https://gorest.co.in/public/v2/users', user, {

        headers: {

            Authorization: 'Bearer 840233805f5da6e91fe8a8127f75cbe1a6e09f82867fe03646428336433ff2fd',


        },
    })
    return response.data;
});


export { addUser };
