import request from "./request";

export const getSignupUser = (user) => request("auth/signup", "POST", user);

export const getLoginUser = (user) => request("auth/login", "POST", user);

export const getVerifyUser = () => request("auth/verify", "GET");

export const logoutUser = () => request("auth/logout", "POST");
