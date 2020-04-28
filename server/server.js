const express = require('express');
const path = require('path');
const parser = require('body-parser');
//const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const {CardList, UserProfile} = require('../db/db.js')
const app = express();
const PORT = 3000;

app.use(parser.json());

app.use(express.static(path.join(__dirname, '../dist')))


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/nexacards', (req, res) => {
  let clean = (obj) => {
    for (let key in obj) {
      if (obj[key] === '') {
        delete obj[key]
      }
    }
    return obj;
  }
  console.log('req', req.query)
  // let filteredQuery = clean(Object.assign({}, req.query));
  let filteredQuery = {
    type: 'UNIT',
    total_cost: '4',
    g_sign: 'OO',
    color: '青',
  }
  CardList.find(filteredQuery, (err, result) => {
    if (err) throw err;
      res.send(result)
  })
})

app.get('/decklists', (req, res) => {
  UserProfile.find({}, (err, result) => {
    if (err) throw err;
    res.send(result);
  })
})

app.post('/makedeck', (req, res) => {
  const { userName, decks } = req.body
  UserProfile.findOneAndUpdate({userName: userName}, {$push: {decks: decks}}, {new: true}, (err, result) => {
    if (err) throw err;
    console.log(result)
    res.send('success!!')
  })
})

app.delete('/deletedeck', (req, res) => {
  const { userName, deckId } = req.query;
  UserProfile.findOneAndUpdate({userName: userName}, { $pull: {decks: {_id: deckId}}}, (err, result) => {
    if (err) throw err;
    res.send('deck deleted')
  })
})

app.listen(PORT, () => {
  console.log("Listening to port: ", PORT)
})
