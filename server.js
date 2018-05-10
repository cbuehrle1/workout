const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const user = require('./models/user.js');
const db = process.env.MONGODB_URI || "mongodb://localhost:27017/workout";

let app = express();

mongoose.connect(db);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('The Workout API')
});

app.post('/api/plan', (req, res) => {
  res.send('received request');
});

const port = 5001;

app.listen(port, function() {
  console.log('listening on port ' + port);
});
