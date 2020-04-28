import React, { Fragment } from 'react';
import DisplayCards from '../../containers/common/DisplayCardsContainer';

const Cards = ( { selectedEntry, data } ) => {
  return (
    <Fragment>
      {
        data.length ? 
          <DisplayCards 
            canEdit={true}
          /> : null}
    </Fragment>
  )
}

export default Cards;


