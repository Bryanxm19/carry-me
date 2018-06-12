const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const socket = require('socket.io');
const keys = require('./config/keys');
require('./models/user');
require('./models/service');
require('./models/request');
require('./models/message');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 100, // 30 days
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/userRoutes')(app);
require('./routes/serviceRoutes')(app);
require('./routes/requestRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // express serves production assets like main.js & main.css
  app.use(express.static('client/build'));

  // express serves index.html if route is unrecognizable
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT);

const io = socket(server);

io.on('connection', (socket) => {
  socket.on('SEND_MESSAGE', function(data){
    io.emit('RECEIVE_MESSAGE', data);
  })
});