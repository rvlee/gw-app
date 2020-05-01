const axios = require('axios');
const fs = require('fs');

const url = 'http://www.carddass.com/cdmasters/nexa/cardlist/controller/request.php';

axios.get(url)
  .then(response => {
    // console.log(response.data.data.length)
    fs.writeFileSync('./gwn.json', JSON.stringify(response.data.data, null, 2));
  })
  .catch(error => {
    console.log(error)
  })


