import {
  connect,
} from 'react-redux';
import Deck from '../../components/decks/Deck';
import {
  getCurrentView, toggleEditDeck,
} from '../../actions/common';
import {
  updateDeckQuantity, clearDeck, updateDeckAPI,
} from '../../actions/deck';

const mapDispatchToProps = {
  getCurrentView, updateDeckQuantity, clearDeck, updateDeckAPI, toggleEditDeck,
};
const mapStateToProps = (state) => ({
  selectedDeck: state.deck.selectedDeck,
  selectedEntry: state.card.selectedEntry,
  newDeckData: state.deck.newDeckData,
  canEdit: state.common.canEdit,
});
export default connect(mapStateToProps, mapDispatchToProps)(Deck);
