import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const logIn = createAsyncThunk('auth/logIn', async (credential, _) => {
    const credentials = {username: 'john_doe', password: 'pass123' };
    const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: credentials.username,
            password: credentials.password
        })
    });

    if (!response.ok) {
        throw new Error('please Enter Correct Information');
    }

    const json = await response.json();
    localStorage.setItem('token', json.token);
    return json;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        data: '',
        error: '',
        status: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logIn.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(logIn.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default authSlice.reducer;
