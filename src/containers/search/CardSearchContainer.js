import React from 'react';
import { connect } from 'react-redux';
import { searchCards } from '../../actions/card';
import CardSearch from '../../components/search/CardSearch';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = { searchCards };

export default connect(mapStateToProps, mapDispatchToProps)(CardSearch);
