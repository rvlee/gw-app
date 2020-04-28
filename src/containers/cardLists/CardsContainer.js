import React from 'react';
import { connect } from 'react-redux';
import Cards from '../../components/cardLists/Cards';


const mapStateToProps = (state) => {
  return {
    data: state.card.data,
    selectedEntry: state.card.selectedEntry
  };
}

export default connect(mapStateToProps)(Cards);


