import { configureStore} from "@reduxjs/toolkit";
import shopSlice from "./slices/shopSlice";

export const store = configureStore({
    reducer:{
      shop:shopSlice
    },
    devTools:true
})