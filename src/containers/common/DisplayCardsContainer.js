import React from 'react';
import { connect } from 'react-redux';
import DisplayCards from '../../components/common/DisplayCards';

const mapStateToProps = (state) => {
  return {
    deckData: state.card.data,
    selectedEntry: state.card.selectedEntry
  };
}

export default connect(mapStateToProps)(DisplayCards);
