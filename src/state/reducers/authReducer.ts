import { AuthActionType } from "..";
import { AuthAction } from "..";

export interface AuthState {
  user: null;
  isFetching: boolean;
  error: boolean;
}

export const initialAuthState: AuthState = {
  user: null,
  isFetching: false,
  error: false,
};

export const authReducer = (
  state: AuthState = initialAuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionType.LOGIN_START:
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default authReducer;
