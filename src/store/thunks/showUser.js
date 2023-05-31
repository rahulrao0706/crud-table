import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const showUser = createAsyncThunk('showuser/fetch', async (id) => {
    
    const response = await axios.get(`https://gorest.co.in/public/v2/users/${id}` ,{

        headers: {

            Authorization: 'Bearer 840233805f5da6e91fe8a8127f75cbe1a6e09f82867fe03646428336433ff2fd',


        },
    })

    return response.data
})

export { showUser };