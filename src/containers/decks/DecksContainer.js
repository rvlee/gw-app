import {
  connect,
} from 'react-redux';
import {
  deleteDeckAPI,
  getDecks,
  selectedDeck,
} from '../../actions/deck';
import {
  getCurrentView,
} from '../../actions/common';
import Decks from '../../components/decks/Decks';

const mapDispatchToProps = {
  deleteDeckAPI, getDecks, selectedDeck, getCurrentView,
};
const mapStateToProps = (state) => ({
  deckList: state.deck.deckList,
  selectedDeck: state.deck.selectedDeck,
  currentView: state.common.currentView,
});
export default connect(mapStateToProps, mapDispatchToProps)(Decks);
