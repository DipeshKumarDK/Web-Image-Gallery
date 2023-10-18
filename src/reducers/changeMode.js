const initialState = "light";

const changeMode = (state = initialState , action) => {
    switch(action.type){
        case "MODE": return action.mode;
        default: return state;
    }
}

export default changeMode; 