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
        type: USER_LOADING_OFF,
        payload: {
          email: "jbj@jbj.com",
          username: "jbj",
        },
      });
    });
  });
});
