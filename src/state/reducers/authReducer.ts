import { AuthActionType } from "..";
import { AuthAction } from "..";
import { IUser } from "../../api";

export interface AuthState {
  user: IUser | null;
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
        isFetching: true,
        error: false,
      };
    case AuthActionType.LOGIN_SUCCESS:
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case AuthActionType.LOGIN_FAILURE:
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
