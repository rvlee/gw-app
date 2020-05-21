import {
  connect,
} from 'react-redux';
import {
  createDeckAPI, clearDeck,
} from '../../actions/deck';
import {
  getCurrentView,
} from '../../actions/common';
import NewDeck from '../../components/decks/NewDeck';

const mapDispatchToProps = {
  getCurrentView, createDeckAPI, clearDeck,
};
const mapStateToProps = (state) => ({
  newDeckData: state.deck.newDeckData,
});
export default connect(mapStateToProps, mapDispatchToProps)(NewDeck);
