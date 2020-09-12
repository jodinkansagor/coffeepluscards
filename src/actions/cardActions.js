import { getCards } from "../services/cardApiServices";

export const FETCH_GET_CARD_LOADING = "FETCH_GET_CARD_LOADING";
export const FECTH_GET_CARDS = "FETCH_GET_CARDS";

export const fetchGetCards = () => (dispatch) => {
  dispatch({ type: FETCH_GET_CARD_LOADING });
  return getCards().then((cardArray) =>
    dispatch({ type: FECTH_GET_CARDS, payload: cardArray })
  );
};
