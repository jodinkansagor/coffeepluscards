export const SET_USER_SESSION = "SET_USER_SESSION";
export const SET_SESSION_ERROR = "SET_SESSION_ERROR";
export const CLEAR_USER_SESSION = "CLEAR_USER_SESSION";
export const USER_LOADING_ON = "USER_LOADING_ON";
export const USER_LOADING_OFF = "USER_LOADING_OFF";

export const turnUserLoadingOn = () => ({ type: USER_LOADING_ON });
export const turnUserLoadingOff = () => ({ type: USER_LOADING_OFF });

export const authorizeUser = (user, authFunction) => (dispatch) => {
  // dispatch(turnUserLoadingOn());
  return authFunction(user)
    .then((user) => {
      dispatch({ type: SET_USER_SESSION, payload: user });
      // return dispatch(turnUserLoadingOff());
    })
    .catch((authError) =>
      dispatch({ type: SET_SESSION_ERROR, payload: authError })
    );
};

export const clearUserSession = () => ({
  type: CLEAR_USER_SESSION,
});
