export const getNewDeck = (deck, card, cardQuantity) => {
  let newDeckObj = {
      ...deck,
      [card.card_id]: {
        ...card,
        quantity: deck[card.card_id] ? deck[card.card_id].quantity + cardQuantity : 1
      },
    }
  if (cardQuantity === -1 && deck[card.card_id] && deck[card.card_id].quantity <= 1) {
    delete newDeckObj[card.card_id]
  }
  return newDeckObj;
}

   //       let newObjState = {...state.newDeckData}
    //       delete newObjState[action.payload.card_id]
    //       return {
    //         newDeckData: newObjState
    //       }

    // case INCREMENT: 
    //   return {
    //     newDeckData: {
    //     ...state.newDeckData,
    //     [action.payload.card_id]: {
    //       ...action.payload,
    //       quantity: state.newDeckData[action.payload.card_id] ? state.newDeckData[action.payload.card_id].quantity + 1 : 1,
    //       }
    //     }
    //   }

    // case DECREMENT: 
    //   if(state.newDeckData[action.payload.card_id] && state.newDeckData[action.payload.card_id].quantity > 1) {
    //     return {
    //       newDeckData: {
    //         ...state.newDeckData,
    //         [action.payload.card_id]: {
    //           ...action.payload,
    //           quantity: state.newDeckData[action.payload.card_id].quantity - 1,
    //         }
    //       }
    //     }
    //   } else if (state.newDeckData[action.payload.card_id] && state.newDeckData[action.payload.card_id].quantity <= 1) {
    //       let newObjState = {...state.newDeckData}
    //       delete newObjState[action.payload.card_id]
    //       return {
    //         newDeckData: newObjState
    //       }
    //   }