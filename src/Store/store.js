import taskSlice from "./Slices/TaskSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        task: taskSlice
    }
})

export default store