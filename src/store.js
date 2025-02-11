import  {configureStore} from '@reduxjs/toolkit';
import  logIn from './redux/authSlice'
import productsReducer from "./redux/productSlice"

export const store = configureStore({
    reducer: {
        auth:logIn,
        products: productsReducer,
        
    },
})