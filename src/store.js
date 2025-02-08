import  {configureStore} from '@reduxjs/toolkit';
import  logIn from './redux/authSlice'

export const store = configureStore({
    reducer: {
        auth:logIn
    },
})