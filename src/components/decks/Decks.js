import React from 'react';
//import Deck from './Deck';
//import NewDeck from './NewDeck';
import { DECK_IMAGE_URL } from '../../constants/deck';
import Switch from '@material-ui/core/Switch';
// import axios from 'axios';

require('../../css/deck.css');

class Decks extends React.Component {
  state = {
    selectedDeck: {},
    canEdit: false,
  }

  componentDidMount() {
    this.props.getDecks()
  }

  // getDecks = () => {
  //   console.log(this.props.getDecks)
  // }

  // deleteDeck = (deckId, userName) => {
  //   let test = confirm("are you sure you want to delete this deck?")
  //   if (test) {
  //     axios.delete(`${URI}/deletedeck`, 
  //       {
  //         params: {deckId, userName}
  //       }
  //     )
  //     .then(res => {
  //       this.getDecks()
  //     })
  //   }
  // }

  toggleEdit = () => {
    this.setState({
      canEdit: !this.state.canEdit,
    })
  }
  
  getDeckEntry = (entry) => {
    const { editDeck } = this.props;
    this.setState({
      selectedDeck: entry,
    })
    editDeck(entry.deckList)
  }

  renderDecks = () => {
    
    const { deckData, canEdit } = this.state;
    const { toggleView, deckList } = this.props;
    
    const newDeckList = deckList ? deckList[0].decks : [];
    const userName = deckData ? deckData[0].userName : '';
    const showDecks = newDeckList.map((deck, idx) => {
      return (
        <div className="deck-preview" key={idx}>
          <div onClick={()=>{ this.props.selectedDeck(deck)}}>
            <img src={`${deck.deckImage !== '' ? deck.deckImage : DECK_IMAGE_URL}`} style={{width:'150px'}}/>
            <br/>
            {deck.name}
          </div>
          {canEdit ? <button onClick={() => {this.deleteDeck(deck._id, userName)}}> Delete Deck </button> : null}
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
    const { displayDeck, selectedDeck, canEdit } = this.state;
    const { addCard, subtractCard, editDeck, newDeckData, createDeck, currentView, toggleView } = this.props;
    let viewCmp = <div />
    switch (currentView) {
      case 'DISPLAYDECKS':
        viewCmp = this.renderDecks();
        break;
      case 'SINGLEDECK':
        viewCmp = (
          <Deck 
            selectedDeck={newDeckData}
            toggleDeck={this.toggleDeck}
            addCard={addCard}
            subtractCard={subtractCard}
            editDeck={editDeck}
            toggleView={toggleView}
          />
        )
        break;
        case 'NEWDECK':
          viewCmp = (
            <NewDeck 
              toggleCreate={this.toggleCreate}
              createDeck={createDeck}
              newDeckData={newDeckData}
              toggleView={toggleView}
            />
          )
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
    console.log('deckList', this.props.deckList)
    return ( 
      <React.Fragment>       
        {this.renderView()}
      </React.Fragment>
    )
  }
}

module.exports = Decks;