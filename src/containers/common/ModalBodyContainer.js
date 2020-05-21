import {
  connect,
} from 'react-redux';
import {
  updateDeckQuantity,
} from '../../actions/deck';
import ModalBody from '../../components/common/ModalBody';

const mapDispatchToProps = {
  updateDeckQuantity,
};

const mapStateToProps = (state) => ({
  deckList: state.deck.newDeckData,
  cardData: state.card.selectedEntry,
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalBody);
