import { combineReducers } from "redux";
import { employeeReducer } from "./EmployeeReducer";
import { loginReducer } from "./LoginReducer";


const rootReducer = combineReducers({
    login: loginReducer,
    employee: employeeReducer
});

export default rootReducer;