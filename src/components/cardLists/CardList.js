import React from 'react';
import { getNewDeck } from '../../utils/getNewDeck';
require('../../css/card.css');

const CardList = ({
  cardData, 
  openModal,
  updateDeckAction,
  canEdit,
  getEntryAction,
  deckList
}) => {
  const cardList = cardData.map((card, index)=> {
    return (
      <div className='card-entries' key={index}>
        {canEdit ? <button onClick={()=>{updateDeckAction(getNewDeck(deckList, card, 1))}}>+</button> : null}
        {canEdit ? <button onClick={()=>{updateDeckAction(getNewDeck(deckList, card, -1))}}>-</button> : null}
        <br/>
        <img 
          onClick={() => {openModal(); getEntryAction(card)}} 
          src={`${card.image_link}`} 
        />
        <br/>
        <div className="card-name">
          {card.card_name}
        </div>
      </div>
    )
  })
  return cardList;
}


export default CardList;
