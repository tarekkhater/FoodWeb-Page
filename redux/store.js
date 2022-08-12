import { configureStore } from "@reduxjs/toolkit";
import slices from "./slices";

const store = configureStore({
    reducer : {
        products : slices
    },
})
export default store;