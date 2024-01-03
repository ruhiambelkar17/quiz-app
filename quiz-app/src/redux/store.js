import {createStore} from "redux";

const reducer=(state,action) => {
    // if (action.type === "Increment"){
    //     return state + 1;
    // }

    if (action.type === "NextQue") {
        return state=60;
    }
    else
    {
        return state=0;
    }
}

export const store= createStore(reducer); // created store