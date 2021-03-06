import React from 'react';
import {
  getNewDeck,
} from '../../utils/getNewDeck';

require('../../css/card.css');

const CardList = ({
  cardData,
  openModal,
  updateDeckQuantity,
  canEdit,
  getEntryAction,
  deckList,
}) => {
  const cardList = cardData.map((card, index) => (
    <div className="card-entries" key={index}>
      {canEdit ? <button type="button" onClick={() => { updateDeckQuantity(getNewDeck(deckList, card, 1)); }}>+</button> : null}
      {canEdit ? <button type="button" onClick={() => { updateDeckQuantity(getNewDeck(deckList, card, -1)); }}>-</button> : null}
      <br />
      <img
        onClick={() => { openModal(); getEntryAction(card); }}
        src={`${card.image_link}`}
      />
      <br />
      <div className="card-name">
        {card.card_name}
      </div>
    </div>
  ));
  return cardList;
};


export default CardList;
