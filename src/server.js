const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb://localhost:27017/dropbox-clone',
  { useNewUrlParser: true },
  (err,db) => {  if(err) throw err; }
);
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(require('./routes'));

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});

