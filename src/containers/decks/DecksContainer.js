import React from 'react';
import { connect } from 'react-redux';
import { deleteDeckAPI, getDecks, selectedDeck } from '../../actions/deck';
import Decks from '../../components/decks/Decks';

const mapDispatchToProps = { deleteDeckAPI, getDecks, selectedDeck };
const mapStateToProps = (state) => {
  return {
    deckList: state.deck.deckList,
    selectedDeck: state.deck.selectedDeck,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Decks);
