import React from 'react';
import PropTypes from 'prop-types';

const CardItem = ({ date, card, deck, category, explanation }) => {
  
  return (
    <section>
      <h2>Date pulled: {date}</h2>
      <h2>Card: {card}</h2>
      <h2>Deck: {deck}</h2>
      <h3>{category}</h3>
      <p>{explanation}</p>

    </section>
  )
};

CardItem.propTypes = {
  date: PropTypes.string.isRequired,
  card: PropTypes.string.isRequired,
  deck: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
}

export default CardItem;
