import {
  SET_USER_SESSION,
  CLEAR_USER_SESSION,
  SET_SESSION_ERROR,
} from "../actions/authActions";

const initialState = { user: null, authError: null };
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_SESSION:
      return { ...state, user: action.payload, authError: null };
    case SET_SESSION_ERROR:
      return { ...state, authError: action.payload };
    case CLEAR_USER_SESSION:
      return { ...state, user: null, authError: null };
    default:
      return state;
  }
};

export default authReducer;
