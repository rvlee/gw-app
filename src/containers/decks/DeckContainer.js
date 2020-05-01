import React from 'react';
import { connect } from 'react-redux';
import Deck from '../../components/decks/Deck';
import { getCurrentView } from '../../actions/common';

const mapDispatchToProps = { getCurrentView };
const mapStateToProps = (state) => {
  return {
    selectedDeck: state.deck.selectedDeck,
    selectedEntry: state.card.selectedEntry
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Deck);
