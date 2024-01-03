import {createSlice} from '@reduxjs/toolkit';

const nextQueSlice=createSlice({
    name:"NextQue",
    initialState:[],
    reducers:{
        goToNextQue: (state,action)=> {
            state.push(action.payload);
        }
    }
})

export const { goToNextQue}=nextQueSlice.actions;

export default nextQueSlice.reducer;