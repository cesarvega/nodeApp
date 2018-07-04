//index.js
const express = require('express'),
path = require('path'),
http = require('http'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
cors = require('cors'),
app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

config = require('./server/config/db'),
api = require('./server/routes/api'),
gameRoutes = require('./server/routes/game.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use('/games', gameRoutes);
// Parsers for POST data


const port = process.env.PORT || '433';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
module.exports = () => 'Welcome to Micro'
