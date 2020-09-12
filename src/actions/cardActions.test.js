
import { cardOne, cardTwo } from '../services/__mocks__/cardApiServices'

const {
  fetchGetCards,
  FETCH_GET_CARD_LOADING,
  FETCH_GET_CARDS,
  fetchPostCard,
  FETCH_POST_CARD_LOADING,
  FETCH_POST_CARD,
  ADD_CARD
} = require("./cardActions");

jest.mock("../services/cardApiServices.js");


describe("get cards", () => {
  it("creates the get loading state", () => {
    const dispatch = jest.fn();
    const action = fetchGetCards();

    return action(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({ type: FETCH_GET_CARD_LOADING });
      expect(dispatch).toHaveBeenCalledWith({
        type: FETCH_GET_CARDS,
        payload: [cardOne, cardTwo],
      });
    });
  });
});

describe("post card", () => {
  it("creates the card loading state for post", () => {
    const dispatch = jest.fn();
    const action = fetchPostCard(cardOne);

    return action(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({ type: FETCH_POST_CARD_LOADING });
      expect(dispatch).toHaveBeenCalledWith({
        type: ADD_CARD,
        payload: cardOne,
      });
    });
  });
});
