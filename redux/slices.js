import { createSlice } from "@reduxjs/toolkit";

const slices = createSlice({
    name: "Products" ,
    initialState :{
        items : [
            {name:"Rainbow Vegetable Sandwich" , Time: "15 - 20 Minutes" , Service : 1 , rightPrice:'$10.50' , oldPrice:'$11.70'}
        ]
    },
   
})
export default slices.reducer;
