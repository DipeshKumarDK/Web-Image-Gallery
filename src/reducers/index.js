import { combineReducers } from "redux";
import changeCurrSearch from "./changeCurrSearch";
import changeMode from "./changeMode";

const rootReducer = combineReducers({
    changeCurrSearch,
    changeMode
})

export default rootReducer;