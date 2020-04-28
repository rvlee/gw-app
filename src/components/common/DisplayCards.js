import React from 'react';
import CardList from '../../containers/cardLists/CardListContainer';
import Modal from './Modal';
import ModalBody from '../../containers/common/ModalBodyContainer';
import { MODALSTRUCTURE } from '../../constants/modalStructure';

class DisplayCards extends React.Component {
  state = {
    open: false,
  }
    
  handleOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false,
    })
  }

  renderCards = () => {
    const { deckData, canEdit } = this.props;
    let deckArray = [];
    for(let key in deckData) {
        const times = deckData[key].quantity ? deckData[key].quantity : 1;
        for (let i = 0; i < times; i++) {
          deckArray.push(deckData[key]);
        }
    }
    return (
      <CardList
        canEdit={canEdit}
        cardData={deckArray}
        openModal={this.handleOpen}
      />
    ) 
  }

  render() {
    const { open } = this.state;
    const { selectedEntry, canEdit } = this.props
    console.log('canedit', canEdit)
    return (
      <div>
        {this.renderCards()}
      <Modal 
        open={open}
        onClose={this.handleClose}
      >
        <ModalBody 
          canEdit={canEdit}
          cardData={selectedEntry}
          dataStructure={MODALSTRUCTURE}
        />
      </Modal>
      </div>
    )
  }
}

export default DisplayCards;
