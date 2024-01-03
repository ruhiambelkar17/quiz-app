// store using redux
//import {createStore} from "redux";
// const reducer=(state,action) => {
//     if (action.type === "NextQue") {
//         return state=60;
//     }
//     else
//     {
//         return state=0;
//     }
// }
// export const store= createStore(reducer); // created store

//#############################################################

// store using redux toolkit

import { configureStore } from '@reduxjs/toolkit';
import nextQueReducer from './slices/NextQue';

export const store=configureStore(
    {
        reducer:{
            nextQue:nextQueReducer
        }
    }
);