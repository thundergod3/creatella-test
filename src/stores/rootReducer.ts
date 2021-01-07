import { combineReducers } from "redux";
import productReducer from "./redux/reducers/productReducer";
import utilReducer from "./redux/reducers/utilReducer";

const rootReducer = combineReducers({
	productReducer,
	utilReducer,
});

export default rootReducer;
export type RootReducerI = ReturnType<typeof rootReducer>;
