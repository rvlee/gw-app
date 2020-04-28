import React from 'react';
import { connect } from 'react-redux';
import { getEntryAction } from '../../actions/card';
import { updateDeckAction } from '../../actions/deck';
import CardList from '../../components/cardLists/CardList';

const mapStateToProps = (state) => {
  return {
    deckList: state.deck.newDeckData
  };
}

const mapDispatchToProps = { getEntryAction, updateDeckAction};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
