const mongoose = require('mongoose');
const URI = 'mongodb://localhost/gwNEXA';
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
const db2 = require('./db.js');

//seeding database user deck

const test = {
  userName: "Roy",
  decks: [
    // {
  //   name: "Test Deck 1",
  //   public: true,
  //   deckList: {
  //     '123': 3,
  //     '111': 3,
  //     '321': 3,
  //     '112': 3,
  //     '333': 1
  //   }
  // },
  // {
  //   name: "test deck 2",
  //   public: false,
  //   deckList: {
  //     'a': 3,
  //     'b': 3,
  //     'c': 3,
  //     'd': 3,
  //   }
  // },
  // {
  //   name: "test deck 3",
  //   publick: false,
  //   deckList: {
  //     'z': 3,
  //     'y': 3,
  //     'x': 2
  //   }
  // },  
  // {
  //   name: "test deck 4",
  //   publick: false,
  //   deckList: {
  //     'z': 3,
  //     'y': 3,
  //     'x': 2
  //   }
  // },  
  // {
  //   name: "test deck 5",
  //   publick: false,
  //   deckList: {
  //     'z': 3,
  //     'y': 3,
  //     'x': 2
  //   }
  // },  
  // {
  //   name: "test deck 6",
  //   publick: false,
  //   deckList: {
  //     'z': 3,
  //     'y': 3,
  //     'x': 2
  //   }
  // },  
  // {
  //   name: "test deck 7",
  //   publick: false,
  //   deckList: {
  //     'z': 3,
  //     'y': 3,
  //     'x': 2
  //   }
  // }
  ]
}

var test2 = db2.UserProfile(test);
test2.save((err) => {
  console.log('done')
})


