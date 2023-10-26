

import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    addTodata: (state, action) => {
      state.push(action.payload);
    },removeFromData:(state,action)=>{
       
        return state.filter(data => data.name !== action.payload);
    }
  }
});

export const { addTodata,removeFromData } = dataSlice.actions;
export default dataSlice.reducer;
