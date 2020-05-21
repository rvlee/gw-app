export const getNewDeck = (deck, card, cardQuantity) => {
  const newDeckObj = {
    ...deck,
    [card.card_id]: {
      ...card,
      quantity: deck[card.card_id] ? deck[card.card_id].quantity + cardQuantity : 1,
    },
  };
  if (cardQuantity === -1 && deck[card.card_id] && deck[card.card_id].quantity <= 1) {
    delete newDeckObj[card.card_id];
  }
  return newDeckObj;
};
