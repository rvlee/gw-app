const mongoose = require('mongoose');
const URI = 'mongodb://localhost/gwNEXA';
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
//===== DBSchema =======
var Schema = mongoose.Schema;

var cardSchema = new Schema({
  _id: Number,
  card_id: Number,
  character_id: Number,
  prodid: Number,
  card_number: String,
  serial_number: String,
  card_name: String,
  type: String,
  rarity: String,
  total_cost: String,
  roll_cost: String,
  attack: String,
  shoot: String,
  defense: String,
  terrain: String,
  g_sign: String,
  color: String,
  characteristic: String,
  gain: String,
  guard: String,
  illustrator: String,
  booster: String,
  flavor: String,
  text: String,
  free_words: String,
  image_link: String,
});

var CardList = mongoose.model('CardList', cardSchema);

var userSchema = new Schema ({
  userName: String,
  decks: [{
    id: Number,
    name: String,
    public: Boolean,
    deckImage: String,
    deckList: Schema.Types.Mixed,
  }],
});

var UserProfile = mongoose.model('UserProfile', userSchema)


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
});

// module.exports = CardList;
module.exports = { CardList, UserProfile };