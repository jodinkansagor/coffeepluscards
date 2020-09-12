import {
  SET_USER_SESSION,
  SET_SESSION_ERROR,
  clearUserSession,
} from "../actions/authActions";
import authReducer from "./authReducer";

describe("auth reducer", () => {
  it("handles setting the user session", () => {
    const action = {
      type: SET_USER_SESSION,
      payload: {
        email: "jbj@jbj.com",
        username: "jbj",
      },
    };

    const initialState = { user: null };

    const newState = authReducer(initialState, action);

    expect(newState).toEqual({
      user: {
        email: "jbj@jbj.com",
        username: "jbj",
      },
      authError: null,
    });
  });

  it('handles and auth error action', () => {
    const action = clearUserSession()

    const initialState = {
      user: {
        email: 'jbj@jbj.com'
      },
      authError: {
        error: 'Stupid error'
      }
    }

    const newState = authReducer(initialState, action)
    expect(newState).toEqual({
      user: null, authError: null
    })
  })

  it('handles an unrecognized action', () => {
    const action = { type: 'POOP'}

    const newState = authReducer(undefined, action)
    expect(newState).toEqual({
      user: null, authError: null
    })
  })
});
