import React from 'react';
import Switch from '@material-ui/core/Switch';
import Deck from '../../containers/decks/DeckContainer';
import NewDeck from '../../containers/decks/NewDeckContainer';
import {
  DECK_IMAGE_URL,
} from '../../constants/deck';

require('../../css/deck.css');

class Decks extends React.Component {
  state = {
    canEdit: false,
  }

  componentDidMount() {
    this.props.getDecks();
  }

  toggleEdit = () => {
    this.setState((prevState) => ({
      canEdit: !prevState.canEdit,
    }));
  }


  deleteDeck = (deckID, userName) => {
    const {
      deleteDeckAPI,
    } = this.props;
    const confirmation = confirm('are you sure you want to delete this deck?');
    if (confirmation) {
      deleteDeckAPI(deckID, userName);
    }
  }

  renderDecks = () => {
    const {
      canEdit,
    } = this.state;
    const {
      deckList, selectedDeck, getCurrentView,
    } = this.props;
    const newDeckList = deckList ? deckList[0].decks : [];
    const userName = deckList ? deckList[0].userName : '';
    const showDecks = newDeckList.map((deck, idx) => (
      <div className="deck-preview" key={idx}>
        <div onClick={() => { selectedDeck(deck); getCurrentView('SINGLEDECK'); }}>
          <img
            src={`${deck.deckImage !== '' ? deck.deckImage : DECK_IMAGE_URL}`}
            style={{
              width: '150px',
            }}
          />
          <br />
          {deck.name}
        </div>
        {canEdit ? <button type="button" onClick={() => { this.deleteDeck(deck._id, userName); }}> Delete Deck </button> : null}
      </div>
    ));
    return (
      <React.Fragment>
        <div style={{
          textAlign: 'end',
        }}
        >
          Edit Decks
          <Switch
            checked={canEdit}
            onChange={this.toggleEdit}
            color="primary"
          />
          <div>
            <button type="button" onClick={() => { getCurrentView('NEWDECK'); }}> Create Deck </button>
          </div>
        </div>
        {showDecks}
      </React.Fragment>
    );
  }

  renderView = () => {
    const {
      editDeck, currentView,
    } = this.props;
    let viewCmp = <div />;
    switch (currentView) {
      case 'DISPLAYDECKS':
        viewCmp = this.renderDecks();
        break;

      case 'SINGLEDECK':
        viewCmp = (
          <Deck
            editDeck={editDeck}
          />
        );
        break;
      case 'NEWDECK':
        viewCmp = (
          <NewDeck />
        );
        break;
      default:
        break;
    }
    return viewCmp;
  }

  render() {
    return this.renderView();
  }
}

module.exports = Decks;
