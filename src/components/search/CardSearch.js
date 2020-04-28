import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import DropDown from './DropDown';
import { searchCards } from '../../actions/card';
import { FILTERS } from '../../constants/filterSelections';
import { STRUCTURE } from '../../constants/filterStructure';

class CardSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      total_cost: '',
      roll_cost: '',
      g_sign: '',
      color: '',
      booster: ''
    }
    this.baseState = this.state;
  }

  handleDropdown = (key, val) => {
    this.setState({
      [key]: val
    })
  }

  reset = () => {
    this.setState(this.baseState)
  }
  
  isParamsEmpty = () => {
    const { searchCards } = this.props;
    let check = false;

    for (let key in this.state) {
      if (this.state[key] !== '') {
        check = true;
      }
    }

    // if (check) {
    //   searchCards(this.state);
    // } else {
    //   alert('Search Field cannot be empty')
    // }

    searchCards(this.state);
	}

  renderStructure = () => {
    return STRUCTURE.map((element, idx) => {
      return (
        <p key={idx}>
          {element.map((entry, index) => {
            let filterCmp = <div />
            switch (entry.format) {
              case 'INPUT':
                filterCmp = <input type="text"/>
                break;
              case 'DROPDOWN':
                filterCmp = 
                  <DropDown
                    val={this.state[entry.key]}
                    label={`${entry.key}`}
                    selections={FILTERS[entry.selections]}
                    onChange={this.handleDropdown}
                  />
                break;
              case 'BUTTON':
                switch (entry.key) {
                  case 'Clear':
                    filterCmp = <button onClick={this.reset}>{entry.key}</button>
                    break;
                  case 'Search':
                    filterCmp = <button onClick={()=>{this.isParamsEmpty()}}>{entry.key}</button>
                    break
                  default:
                    break;
                }
                break;
              default:
                break;
            }
            return (
              <React.Fragment key={index}>
                {entry.title}
                {filterCmp}
              </React.Fragment>
            )
          })}
        </p>
      )
    })
  }

  render() {
    return (
      <Fragment>
        {this.renderStructure()}
      </Fragment>
    )
  }
}

export default CardSearch;
