import {
  connect,
} from 'react-redux';
import {
  getEntryAction,
} from '../../actions/card';
import {
  updateDeckQuantity,
} from '../../actions/deck';
import CardList from '../../components/cardLists/CardList';

const mapStateToProps = (state) => ({
  deckList: state.deck.newDeckData,
});

const mapDispatchToProps = {
  getEntryAction, updateDeckQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
