var GWNCards = require('./gwn.json');

let result = {};
GWNCards.forEach((card) => {
  result[card.info_16] = true;
});

console.log(result);