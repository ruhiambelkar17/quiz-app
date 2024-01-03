import {createStore} from "redux";

const reducer=(state=0,action) => {
    // if (action.type === "Increment"){
    //     return state + 1;
    // }

    if (action.type === "NextQue") {
        return state= 60;
    }
}

export const store= createStore(reducer); // created store