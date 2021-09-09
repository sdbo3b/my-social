import { AuthActionType } from "..";
import { IUser } from "../../api";

export interface LoginStart {
  type: AuthActionType.LOGIN_START;
}

export interface LoginSuccess {
  type: AuthActionType.LOGIN_SUCCESS;
  payload: IUser;
}

export interface LoginFailure {
  type: AuthActionType.LOGIN_FAILURE;
  payload: any;
}

export interface FollowUser {
  type: AuthActionType.FOLLOW_USER;
  payload: string;
}

export interface UnfollowUser {
  type: AuthActionType.UNFOLLOW_USER;
  payload: string;
}

export type AuthAction =
  | LoginStart
  | LoginSuccess
  | LoginFailure
  | FollowUser
  | UnfollowUser;
