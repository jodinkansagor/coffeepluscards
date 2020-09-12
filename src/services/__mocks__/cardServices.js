const cardOne = {
  date: "Feb 1",
  card: "2 of cups",
  deck: "Rider-Waite",
  category: ["love", "family"],
  explanation: "Mushy love stuff",
};

const cardTwo = {
  date: "Feb 2",
  card: "2 of swords",
  deck: "Rider-Waite",
  category: ["work", "family"],
  explanation: "thinking a lot",
};


export const postCard = () => {
  return Promise.resolve(card1);
};

export const getCards = () => {
  return Promise.resolve([
    card1, card2
  ]);
};
