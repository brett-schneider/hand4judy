// server.js

// first we import our dependencies…

import { getSecret } from './secrets';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

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
  // body parser lets us use the req.body
  const { image, type, list, title, user, location, description, pickuptime, expire } = req.body;
  if (!type || !list || !title || !user || !location || !expire) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'null: type, list, title, user, location or expire'
    });
  }
  item.image = image;
  item.type = type;
  item.list = list;
  item.title = title;
  item.user = user;
  item.location = location;
  item.description = description;
  item.pickuptime = pickuptime;
  item.expire = expire;
  item.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// Use our router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
