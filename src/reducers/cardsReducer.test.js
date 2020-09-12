import reducer from './cardsReducer'
import { cardOne, cardTwo } from '../services/__mocks__/cardApiServices'
import { FETCH_POST_CARD_LOADING, FETCH_POST_CARD } from "../actions/cardActions";

describe("card reducer", () => {
  it("handles fetch posting loading card", () => {
    const action = { type: FETCH_POST_CARD_LOADING };
    const initialState = { loading: false, card: null };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: true,
      card: null,
    });
  });

  it('handles fetching post cards', () => {
    const action = {
      type: FETCH_POST_CARD,
      payload: cardOne
    }

    const initialState = { loading: true, card: null }
    const newState = reducer(initialState, action)

    expect(newState).toEqual({
      loading: false,
      card: cardOne
    })
  })

});
