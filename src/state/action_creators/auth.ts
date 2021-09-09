import {
  AuthActionType,
  FollowUser,
  LoginFailure,
  LoginSuccess,
  UnfollowUser,
} from "..";
import { IUser } from "../../api";
import { LoginStart } from "..";

export const loginStart = (): LoginStart => ({
  type: AuthActionType.LOGIN_START,
});

export const loginSuccess = (user: IUser): LoginSuccess => ({
  type: AuthActionType.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (err: any): LoginFailure => ({
  type: AuthActionType.LOGIN_FAILURE,
  payload: err,
});

export const followUser = (userId: string): FollowUser => {
  return {
    type: AuthActionType.FOLLOW_USER,
    payload: userId,
  };
};

export const unfollowUser = (userId: string): UnfollowUser => {
  return {
    type: AuthActionType.UNFOLLOW_USER,
    payload: userId,
  };
};
