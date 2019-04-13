const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const cors = require('cors');

const app = express();
const server = http.Server(app);

const io = require('socket.io')(server);

io.on('connection', socket => {
  socket.on('connectRoom', box => {
    socket.join(box);
  });
});

mongoose.connect(
  'mongodb+srv://diogoqds:mongo@cluster0-cbkdl.mongodb.net/dropbox-clone?retryWrites=true',
  { useNewUrlParser: true },
  (err,db) => {  if(err) throw err; }
);
const port = process.env.PORT || 3001;

app.use(cors());

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname,'..','tmp')));

app.use(require('./routes'));

server.listen(port);

