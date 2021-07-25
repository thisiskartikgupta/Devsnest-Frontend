import formReducer from "./formReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    formReducer : formReducer,
});

export default rootReducer;