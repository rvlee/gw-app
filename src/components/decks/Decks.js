import React from 'react';
import Deck from '../../containers/decks/DeckContainer';
//import NewDeck from './NewDeck';
import { DECK_IMAGE_URL } from '../../constants/deck';
import Switch from '@material-ui/core/Switch';

require('../../css/deck.css');

class Decks extends React.Component {
  state = {
    canEdit: false,
  }

  componentDidMount() {
    this.props.getDecks()
  }

  toggleEdit = () => {
    this.setState({
      canEdit: !this.state.canEdit,
    })
  }
  

  renderDecks = () => {
    
    const { deckData, canEdit, toggleView } = this.state;
    const { deckList, getDecks, selectedDeck, deleteDeckAPI, getCurrentView } = this.props;
    const newDeckList = deckList ? deckList[0].decks : [];
    const userName = deckList ? deckList[0].userName : '';
    const showDecks = newDeckList.map((deck, idx) => {
      return (
        <div className="deck-preview" key={idx}>
          <div onClick={()=>{selectedDeck(deck); getCurrentView('SINGLEDECK')}}>
            <img src={`${deck.deckImage !== '' ? deck.deckImage : DECK_IMAGE_URL}`} style={{width:'150px'}}/>
            <br/>
            {deck.name}
          </div>
          {canEdit ? <button onClick={() => {deleteDeckAPI(deck._id, userName)}}> Delete Deck </button> : null}
        </div>
      )
    })
    return (
      <React.Fragment>
        <div style={{textAlign:'end'}}>
          Edit Decks
          <Switch
            checked={canEdit}
            onChange={this.toggleEdit}
            color="primary"
          />
          <div>
            <button onClick={() => {toggleView('NEWDECK')}}> Create Deck </button>
          </div>
        </div>
        {showDecks}
      </React.Fragment>
    );
  }

  renderView = () => {
    const { displayDeck, canEdit } = this.state;
    const { editDeck, newDeckData, createDeck, selectedDeck, currentView } = this.props;
    console.log('currentView', currentView)
    let viewCmp = <div />
    switch (currentView) {
      case 'DISPLAYDECKS':
        viewCmp = this.renderDecks();
        break;
      case 'SINGLEDECK':
        viewCmp = (
          <Deck 
            editDeck={editDeck}
            toggleView={this.toggleView}
          />
        )
        break;
        // case 'NEWDECK':
        //   viewCmp = (
        //     <NewDeck 
        //       toggleCreate={this.toggleCreate}
        //       createDeck={createDeck}
        //       newDeckData={newDeckData}
        //       toggleView={toggleView}
        //     />
        //   )
      default:
        viewCmp = this.renderDecks();
        break;
    }
    return (
      <React.Fragment>
        {viewCmp}
      </React.Fragment>
    )
  }
  render() {
    return ( 
      <React.Fragment>       
        {this.renderView()}
      </React.Fragment>
    )
  }
}

module.exports = Decks;