import React, {
  Fragment,
} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CardSearch from '../containers/search/CardSearchContainer.js';
import Cards from '../containers/cardLists/CardsContainer';
import Decks from '../containers/decks/DecksContainer';
import TabPanel from './common/TabPanel';

class Home extends React.Component {
  state = {
    value: 0,
  }

	a11yProps = (index) => ({
	  id: `simple-tab-${index}`,
	})

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  }

  render() {
    const {
      value,
    } = this.state;
    return (
      <Fragment>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Card List" {...this.a11yProps(0)} />
            <Tab label="My Decks" {...this.a11yProps(1)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <CardSearch />
          <Cards />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Decks />
        </TabPanel>
      </Fragment>
    );
  }
}


export default Home;
