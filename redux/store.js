import slice from './slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer:{
        info : slice,
    }
})
export default store;