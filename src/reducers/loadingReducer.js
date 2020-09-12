import { LOADING_ON, LOADING_OFF } from '../actions/loadingActions';

const initialState = {
  loading: true
};

const loadingReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOADING_ON:
      return { ...state, loading: true };
    case LOADING_OFF:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default loadingReducer
