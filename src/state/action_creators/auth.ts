import { AuthActionType, LoginFailure, LoginSuccess } from "..";
import { IUser } from "../../api";
import { LoginStart } from "..";

export const loginStart = (userCredentials: any): LoginStart => ({
  type: AuthActionType.LOGIN_START,
  payload: userCredentials,
});

export const loginSuccess = (user: IUser): LoginSuccess => ({
  type: AuthActionType.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (err: any): LoginFailure => ({
  type: AuthActionType.LOGIN_FAILURE,
  payload: err,
});
