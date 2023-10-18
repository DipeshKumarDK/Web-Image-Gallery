const initialState = null;

const changeCurrSearch = (state = initialState , action) => {
    switch(action.type){
        case "CURR": return action.curr;
        default: return state;
    }
}

export default changeCurrSearch; 