import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers, { initialAuthState, State } from "./reducers";

const initialState: State = {
  auth: initialAuthState,
};

const composedEnhancer = applyMiddleware(thunk);

export const store = createStore(reducers, initialState, composedEnhancer);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
