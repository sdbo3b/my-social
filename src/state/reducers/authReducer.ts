import { AuthActionType } from "..";
import { AuthAction } from "..";
import { IUser } from "../../api";

export interface AuthState {
  user: IUser | undefined;
  isFetching: boolean;
  error: boolean;
}

export const initialAuthState: AuthState = {
  user: undefined,
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
        user: undefined,
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
        user: undefined,
        isFetching: false,
        error: action.payload,
      };
    case AuthActionType.FOLLOW_USER:
      return {
        ...state,
        user: {
          ...state.user!,
          following: [...state.user!.following, action.payload],
        },
      };
    case AuthActionType.UNFOLLOW_USER:
      return {
        ...state,
        user: {
          ...state.user!,
          following: [...state.user!.following].filter(
            (id) => id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default authReducer;
