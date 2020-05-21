import {
  connect,
} from 'react-redux';
import Cards from '../../components/cardLists/Cards';


const mapStateToProps = (state) => ({
  data: state.card.data,
  selectedEntry: state.card.selectedEntry,
});

export default connect(mapStateToProps)(Cards);
