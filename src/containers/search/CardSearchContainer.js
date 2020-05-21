import {
  connect,
} from 'react-redux';
import {
  searchCards,
} from '../../actions/card';
import CardSearch from '../../components/search/CardSearch';

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  searchCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardSearch);
