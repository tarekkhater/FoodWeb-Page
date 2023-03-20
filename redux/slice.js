import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: "slice",
    initialState:{
     form: true,
    },
    reducers:{
        showForm:(state) =>{state.form = !state.form}
    }
    }
)
export const { showForm } = slice.actions
export default slice.reducer;