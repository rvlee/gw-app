import React from 'react';
import Switch from '@material-ui/core/Switch';
import DisplayCards from '../common/DisplayCards';

class Deck extends React.Component {
  state = {
    clearDeck: false,
  }

  toggleEdit = () => {
    const {
      updateDeckQuantity, selectedDeck, toggleEditDeck, canEdit, clearDeck,
    } = this.props;

    if (!canEdit) {
      const confirmation = confirm('editing will clear your current new deck list');
      if (confirmation) {
        toggleEditDeck(true);
        this.setState({
          clearDeck: true,
        });
        updateDeckQuantity(selectedDeck.deckList);
      }
    } else {
      toggleEditDeck(false);
      clearDeck();
    }
  }

  editDeck = () => {
    const {
      canEdit, newDeckData, selectedDeck,
    } = this.props;
    if (canEdit) {
      return newDeckData;
    }
    return selectedDeck.deckList;
  }

  render() {
    const {
      selectedDeck,
      getCurrentView,
      updateDeckAPI,
      newDeckData,
      canEdit,
    } = this.props;

    return (
      <React.Fragment>
        <div style={{
          textAlign: 'end',
        }}
        >
          Edit Deck
          <Switch
            checked={canEdit}
            onChange={this.toggleEdit}
            color="primary"
          />
        </div>
        {selectedDeck && selectedDeck.name}
        <DisplayCards
          deckData={this.editDeck()}
          canEdit={canEdit}

        />
        {canEdit ? <button type="button" className="save-button" onClick={() => { updateDeckAPI(selectedDeck, newDeckData); }}>SAVE DECK</button> : null}
        {canEdit ? null : <button type="button" className="return-button" onClick={() => { getCurrentView('DISPLAYDECKS'); }}>Return to Decks</button>}
      </React.Fragment>
    );
  }
}

module.exports = Deck;
