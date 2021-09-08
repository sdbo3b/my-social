import { AuthActionType } from "..";
import { IUser } from "../../api";

export interface LoginStart {
  type: AuthActionType.LOGIN_START;
  payload: any;
}

export interface LoginSuccess {
  type: AuthActionType.LOGIN_SUCCESS;
  payload: IUser;
}

export interface LoginFailure {
  type: AuthActionType.LOGIN_FAILURE;
  payload: any;
}

export type AuthAction = LoginStart | LoginSuccess | LoginFailure;
