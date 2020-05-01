import React, { Fragment } from 'react';
import DisplayCards from '../common/DisplayCards';

const Cards = ( { selectedEntry, data } ) => {
  return (
    <Fragment>
      {
        data.length ? 
          <DisplayCards
            deckData={data}
            canEdit={true}
          /> : null}
    </Fragment>
  )
}

export default Cards;


