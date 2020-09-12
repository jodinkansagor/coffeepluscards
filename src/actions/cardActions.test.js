const {
  fetchGetCards,
  FETCH_GET_CARD_LOADING,
  FECTH_GET_CARDS,
} = require("./cardActions");

jest.mock("../services/cardService.js");

describe("get cards", () => {
  it("creates the get loading state", () => {
    const dispatch = jest.fn();
    const action = fetchGetCards();

    return action(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({ type: FETCH_GET_CARD_LOADING });
      expect(dispatch).toHaveBeenCalledWith({
        type: FECTH_GET_CARDS,
        payload: [
          {
            date: "Feb 1",
            card: "2 of cups",
            deck: "Rider-Waite",
            category: ["love", "family"],
            explanation: "Mushy love stuff",
          },
          {
            date: "Feb 2",
            card: "2 of swords",
            deck: "Rider-Waite",
            category: ["work", "family"],
            explanation: "thinking a lot",
          },
        ],
      });
    });
  });
});
