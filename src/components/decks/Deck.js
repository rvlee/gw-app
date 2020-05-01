import React from 'react';
import DisplayCards from '../common/DisplayCards';
import Switch from '@material-ui/core/Switch';

class Deck extends React.Component {
  state = {
    canEdit: false,
  }

  toggleEdit = () => {
    const { editDeck, selectedDeck } = this.props
    this.setState({
      canEdit: !this.state.canEdit,
    }, () => {
      if (!this.state.canEdit) {
        let test = {}
        editDeck(test)
      } else {
        editDeck(selectedDeck)
      }
    })
  }

  render() {
    const { selectedDeck, selectedEntry, toggleView, getCurrentView } = this.props
    const { canEdit } = this.state;
    //const formatted = Object.values(selectedDeck.deckList)
    return (
      <React.Fragment> 
        <div style={{textAlign:'end'}}>
          Edit Deck
          <Switch
            checked={canEdit}
            onChange={this.toggleEdit}
            color="primary"
          />
        </div>
        {/* {selectedDeck.name} */}
        <DisplayCards 
          deckData={selectedDeck.deckList}
          canEdit={canEdit}

        />
        {canEdit ? <button className="save-button" onClick={() => {console.log('hi')}}>SAVE DECK</button> : null}
        {canEdit ? null: <button className="return-button" onClick={() => {getCurrentView('DISPLAYDECKS')}}>Return to Decks</button>} 
      </React.Fragment>
    )
  }
}

module.exports = Deck;