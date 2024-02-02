import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../slices/weatherDataSlice";

export const store = configureStore({
    reducer: {
        weather: weatherReducer
    }
})