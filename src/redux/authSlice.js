import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const logIn = createAsyncThunk('auth/logIn', async (credential, _) => {
    const response = await fetch('https://fakestoreapi.com/auths/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: credential.username,
            password: credential.password
        })
    });

    if (!response.ok) {
        // const errorData = await response.json();
        throw new Error({message:'please try again later!'});

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
