import React from 'react';
import Switch from '@material-ui/core/Switch';
import DisplayCards from '../common/DisplayCards';

class NewDeck extends React.Component {
  state = {
    deckName: '',
    isPublic: true,
  }

  nameHandler = (event) => {
    this.setState({
      deckName: event.target.value,
    });
  }


  publicSwitch = (event) => {
    this.setState({
      isPublic: event.target.checked,
    });
  }

  render() {
    const {
      newDeckData, getCurrentView, createDeckAPI, clearDeck,
    } = this.props;
    const {
      deckName, isPublic,
    } = this.state;
    return (
      <div>
        <button onClick={() => { getCurrentView('DISPLAYDECKS'); }}> Return to Deck </button>
        <div>Deck Name</div>
        <input
          type="text"
          value={deckName}
          onChange={this.nameHandler}
        />
        <div>
          Make Public
          <Switch
            checked={isPublic}
            onChange={this.publicSwitch}
            color="primary"
          />
        </div>
        <DisplayCards
          deckData={newDeckData}
          canEdit
        />
        <br />
        <button
          type="button"
          onClick={() => {
            createDeckAPI(deckName, isPublic, newDeckData);
            getCurrentView('DISPLAYDECKS');
            clearDeck();
          }}
        >
          Create Deck
        </button>
      </div>
    );
  }
}

module.exports = NewDeck;
