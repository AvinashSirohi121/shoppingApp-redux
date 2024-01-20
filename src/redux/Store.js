import { configureStore } from "@reduxjs/toolkit";
import {CartSlice} from "./Slices/cartSlice";


export const Store = configureStore({
    reducer:{
        cart:CartSlice.reducer
    }
})