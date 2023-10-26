import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./slices/DataSlice";
const store =configureStore({
    reducer:{
        datareducer:DataSlice
    }
})
export default store