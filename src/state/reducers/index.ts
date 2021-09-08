import { combineReducers } from "redux";
import authReducer from "./authReducer";

export * from "./authReducer";

const reducers = combineReducers({
  auth: authReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
