import React from 'react';
import { MODALSTRUCTURE } from '../../constants/modalStructure';
import Modal from '../common/Modal';
import ModalBody from '../common/ModalBody';
import CardList from '../cardLists/CardList';
import DisplayCards from '../common/DisplayCards';
import Switch from '@material-ui/core/Switch';

import axios from 'axios';

class NewDeck extends React.Component {
  state = {
    selectedEntry: {},
    deckName: '',
    isPublic: true,
    deckImage: '',
  }

  nameHandler = (event) => {
    this.setState({
      deckName: event.target.value
    })
  }

  getEntry = (event) => {
    this.setState({
      selectedEntry: event,
    })
  }

  publicSwitch = (event) => {
    this.setState({
      isPublic: event.target.checked
    })
  }
  
  render() {
    const { newDeckData, addCard, subtractCard, createDeck, toggleView } = this.props;
    const { selectedEntry, deckName, isPublic, deckImage, canEdit } = this.state;

    return (
      <div>
        <button onClick={() => {toggleView('DISPLAYDECKS')}}> Return to Deck </button>
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
          selectedEntry={selectedEntry}
          getEntry = {this.getEntry}
          addCard={addCard}
          subtractCard={subtractCard}
          canEdit={true}
        />
        <br/>
        <button onClick={() => {createDeck(deckName, isPublic)}}> Create Deck </button>
      </div>
    )
  }
}

module.exports = NewDeck;


