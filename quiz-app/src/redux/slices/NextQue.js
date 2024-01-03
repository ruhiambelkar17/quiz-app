import {createSlice} from '@reduxjs/toolkit';

const nextQueSlice=createSlice({
    name:"NextQue",
    initialState:0,
    reducers:{
        goToNextQue: (state,action)=> {
            state=action.payload;
        }
    }
})

export const { goToNextQue}=nextQueSlice.actions;

export default nextQueSlice.reducer;