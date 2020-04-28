import React from 'react';
import { connect } from 'react-redux';
import { updateDeckAction } from '../../actions/deck';
import ModalBody from '../../components/common/ModalBody';

const mapDispatchToProps = { updateDeckAction };

const mapStateToProps = (state) => {
  return {
    deckList: state.deck.newDeckData
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalBody);

