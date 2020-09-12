import { getCards, postCard } from "../services/cardApiServices";

export const FETCH_GET_CARD_LOADING = "FETCH_GET_CARD_LOADING";
export const FETCH_POST_CARD_LOADING = "FETCH_POST_CARD_LOADING";
export const FETCH_GET_CARDS = "FETCH_GET_CARDS";
export const FETCH_POST_CARD = 'FETCH_POST_CARD'
export const ADD_CARD = "ADD_CARD";

export const fetchGetCards = () => (dispatch) => {
  dispatch({ type: FETCH_GET_CARD_LOADING });
  return getCards().then((cardArray) =>
    dispatch({ type: FETCH_GET_CARDS, payload: cardArray })
  );
};

export const fetchPostCard = (card) => (dispatch) => {
  dispatch({ type: FETCH_POST_CARD_LOADING });
  return postCard(card).then((card) => dispatch(addCard(card)));
};

 export const addCard = (card) => {
  return {
    type: ADD_CARD,
    payload: card,
  };
};
