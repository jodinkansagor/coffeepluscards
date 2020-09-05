import React from "react";

const CardItem = () => {
  const card = {
    date: "Feb 1",
    card: "2 of cups",
    deck: "Rider-Waite",
    category: ["love", "family"],
    explanation: "Mushy love stuff",
  };

  return (
    <section>
      <h2>Date pulled: {card.date}</h2>
      <h2>Card: {card.card}</h2>
      <h2>Deck: {card.deck}</h2>
      <h3>{card.category}</h3>
      <p>{card.explanation}</p>
    </section>
  );
};

export default CardItem;
