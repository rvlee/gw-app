import React, {
  Fragment,
} from 'react';
import DisplayCards from '../common/DisplayCards';

const Cards = ({
  data,
}) => (
  <Fragment>
    {
      data.length
        ? (
          <DisplayCards
            deckData={data}
            canEdit
          />
        ) : null
    }
  </Fragment>
);

export default Cards;
