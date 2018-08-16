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


// after the code that uses bodyParser and other cool stuff

var originsWhitelist = [

  'http://localhost:4200',      //development

   'http://www.myproductionurl.com'

];

var corsOptions = {

  origin: function(origin, callback){

        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;

        callback(null, isWhitelisted);

  },

  credentials:true

}
app.use(cors(corsOptions));
config = require('./server/config/db'),
api = require('./server/routes/api'),
gameRoutes = require('./server/routes/game.route');
appointmentRoutes = require('./server/routes/appointment.route');
contactRoutes = require('./server/routes/contact.route');
chatRoutes = require('./server/routes/chat.route');
userRoutes = require('./server/routes/user.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use('/games', gameRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/contact', contactRoutes);
app.use('/chat', chatRoutes);
app.use('/user', userRoutes);
// Parsers for POST data


const port = process.env.PORT || '433';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
module.exports = () => 'Welcome to Micro'
