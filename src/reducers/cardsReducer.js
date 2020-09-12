import {
  FETCH_POST_CARD,
  FETCH_POST_CARD_LOADING,
} from "../actions/cardActions";

const initialState = {
  loading: false,
  card: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_CARD_LOADING:
      return { ...state, loading: true };
    case FETCH_POST_CARD:
      return { ...state, loading: false, card: action.payload };
    default:
      return state;
  }
}
