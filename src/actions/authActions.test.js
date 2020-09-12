import {
  SET_USER_SESSION,
  authorizeUser,
  clearUserSession,
  USER_LOADING_OFF,
} from "./authActions";
import { getSignupUser, getLoginUser } from "../services/authServices";

jest.mock("../services/authServices");

describe("Auth actions", () => {
  it("can call the authorize user function with input signup", () => {
    const dispatch = jest.fn();
    const action = authorizeUser(
      {
        email: "jbj@jbj.com",
        username: "jbj",
        pasword: "jbj",
      },
      getSignupUser
    );

    return action(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: SET_USER_SESSION,
        payload: {
          email: "jbj@jbj.com",
          username: "jbj",
        },
      });
    });
  });

  it("can call authorize user function with login input", () => {
    const dispatch = jest.fn();
    const action = authorizeUser(
      { email: "jbj@jbj.com", password: "assword" },
      getLoginUser
    );

    return action(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: SET_USER_SESSION,
        payload: {
          email: "jbj@jbj.com",
        },
      });
    });
  });

  it("can call a clear user session action", () => {
    const action = clearUserSession();
    expect(action.type).toEqual("CLEAR_USER_SESSION");
  });
});
