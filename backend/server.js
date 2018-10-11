// server.js

// first we import our dependencies…

import { getSecret } from './secrets';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import Item, { Location, User } from './models/item';

// and create our instances
const app = express();
const router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = process.env.API_PORT || 3001;

// db config -- set your URI in secrets.js
mongoose.connect(getSecret('dbUri'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// now we can set the route path & initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// todo: filters
router.get('/item', (req, res) => {
  Item.find((err, item) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: item });
  });
});

router.post('/item', (req, res) => {
  const item = new Item();
  const location = new Location();
  const userloc = new Location();
  const user = new User();
  // body parser lets us use the req.body
  const { rimageURI, rtype, rlist, rtitle, ruser, rlocation, rdescription, rpickuptime, rexpiry } = req.body;
  if (!rtype || !rlist || !rtitle || !ruser || !rlocation || !expiry) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'null: type, list, title, user, location or expire'
    });
  }
  location.lat = rlocation.lat;
  location.lon = rlocation.lon;
  userloc.lat = ruser.location.lat;
  userloc.lon = ruser.location.lon;
  user.name = ruser.name;
  user.location = userloc;
  item.imageURI = rimageURI;
  item.type = rtype;
  item.list = rlist;
  item.title = rtitle;
  item.user = user;
  item.location = location;
  item.description = rdescription;
  item.pickuptime = rpickuptime;
  item.expiry = rexpiry;
  item.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.get('/user', (req, res) => {
  User.find((err, user) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: user });
  });
});

router.post('/user', (req, res) => {
  const userloc = new Location();
  const user = new User();
  // body parser lets us use the req.body
  const { rname, rlocation } = req.body;
  if (!rname || !rlocation) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'null: name or location'
    });
  }
  userloc.lat = ruser.location.lat;
  userloc.lon = ruser.location.lon;
  user.name = ruser.name;
  user.location = userloc;
  user.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// Use our router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
