//index.js
const express = require('express'),
path = require('path'),
http = require('http'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
cors = require('cors'),
app = express();
const fetch = require('node-fetch')

config = require('./server/config/db'),
api = require('./server/routes/api'),
gameRoutes = require('./server/routes/game.route');

app.use(cors());
const router = express.Router();
const originWhitelist = ['http://localhost:3000', 'http://localhost:4200'];


router.use((request, response, next) => {
  console.log('Server info: Request received');
  
  let origin = request.headers.origin;
  
  // only allow requests from origins that we trust
  if (originWhitelist.indexOf(origin) > -1) {
    response.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  // only allow get requests, separate methods by comma e.g. 'GET, POST'
  response.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  response.setHeader('Access-Control-Allow-Credentials', true);
  
  // push through to the proper route
  next();
});
app.use('/games', gameRoutes);
mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = process.env.PORT || '433';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
// module.exports = () => 'Welcome to Micro'
 
   
module.exports = async () => {
  const request = await fetch('https://api.github.com/orgs/zeit/members')
  const data = await request.json()

  return data
}