import axios from "axios";
import {
  AppDispatch,
  followUser,
  loginFailure,
  loginStart,
  loginSuccess,
  unfollowUser,
} from "..";
import { IUser } from "../../api";

export interface IUserCredentials {
  email: string;
  password: string;
}

export const beginLogin =
  (userCredentials: IUserCredentials): any =>
  async (dispatch: AppDispatch) => {
    dispatch(loginStart());

    try {
      const res = await axios.post("/auth/login", userCredentials);
      const user: IUser = res.data;
      dispatch(loginSuccess(user));
    } catch (err) {
      dispatch(loginFailure(err));
    }
  };

export const beginFollowUser =
  (currentUser: string, user: string): any =>
  async (dispatch: AppDispatch) => {
    await axios.put(`/api/v1/users/${user}/follow`, {
      userId: currentUser,
    });

    dispatch(followUser(user));
  };

export const beginUnfollowUser =
  (currentUser: string, user: string): any =>
  async (dispatch: AppDispatch) => {
    await axios.put(`/api/v1/users/${user}/unfollow`, {
      userId: currentUser,
    });
    dispatch(unfollowUser(user));
  };
