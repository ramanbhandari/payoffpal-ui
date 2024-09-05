import { combineReducers } from "redux";
import LoginPageReducer from "./screens/login/reducer";
import RegisterReducer from "./screens/register/reducer";

const rootReducer = combineReducers({
    login: LoginPageReducer,
    register: RegisterReducer,
});

export default rootReducer;