// server.js

// first we import our dependencies…

import { getSecret } from './secrets';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import Item, { Location, User, Image } from './models/item';
import moment from 'moment';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import session from 'express-session';

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
app.use(bodyParser.urlencoded({ extended: false, useNewUrlParser: true }));
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.raw({
    type: 'application/octet-stream',
    limit: '10mb'
}));
app.use(logger('dev'));

// now we can set the route path & initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// todo: filters
router.get('/item', (req, res) => {
  Item.find((err, item) => {
    if (err) return res.json({ success: false, error: err });
    //console.log("item",item[2].image);
    return res.send({ success: true, data: item });
  });
});

router.post('/item', (req, res) => {
  const item = new Item();
  const location = new Location();
  const userloc = new Location();
  const user = new User();
  const image = new Image();
  // body parser lets us use the req.body
//  console.log(req.body);
  const { rimageURI, rtype, rside, rtitle, rusername, rlocationLat, rlocationLon, rdescription, rprice, rpickuptime, rexpiry, rimage, rimagedata } = req.body;
/*
  if (!rtype || !rlist || !rtitle || !ruser || !rlocation || !expiry) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'null: type, list, title, user, location or expire'
    });
  }
*/
  location.lat = rlocationLat;
  location.lon = rlocationLon;
//  userloc.lat = ruser.location.lat;
//  userloc.lon = ruser.location.lon;
  user.name = rusername;
//  user.name = ruser.name;
  user.location = userloc;
  //console.log("imageid",image._id);
  //fs.appendFileSync(image._id+".jpg",rimagedata.toString(),function(err) { console.log(err) });
  image.type = rimage.type;
  image.name = rimage.name;
  image.data = rimagedata;
  item.imageURI = rimageURI;
  item.type = rtype;
  item.side = rside;
  item.title = rtitle;
  item.user = user;
  item.location = location;
  item.description = rdescription;
  item.pickuptime = rpickuptime;
  item.price = rprice;
  item.expiry = moment(rexpiry);
  item.image = image;
  // console.log("image",image);
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

router.get('/image', (req, res) => {
  Image.find((err, image) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: image });
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

// update
router.put('/item/:itemId', (req, res) => {
  const { itemId } = req.params;
  if (!itemId) {
    return res.json({ success: false, error: 'No item id provided' });
  }
  Item.findById(itemId, (error, item) => {
    if (error) return res.json({ success: false, error });
    const { rimageURI, rtype, rlist, rtitle, ruser, rlocationLat, rlocationLon, rdescription, rpickuptime, rexpiry, rimage } = req.body;
    if (rimageURI) item.imageURI = rimageURI;
    if (rtype) item.type = rtype;
    if (rside) item.side = rside;
    if (rlist) item.list = rlist;
    if (rtitle) item.title = rtitle;
//    if (ruser) item.user = ruser;
    if (rlocation) item.rlocation = rlocation;
    if (rpickuptime) item.rpickuptime = rpickuptime;
    if (rprice) item.price = rprice
    if (rexpiry) item.expiry = moment(rexpiry);
    if (rimage) item.image = rimage;
    item.save(error => {
      if (error) return res.json({ success: false, error });
      return res.json({ success: true });
    });
  });
});
// del
router.delete('/item/:itemId', (req, res) => {
  const { itemId } = req.params;
  if (!itemId) {
    return res.json({ success: false, error: 'No item id provided' });
  }
  Item.remove({ _id: itemId }, (error, item) => {
    if (error) return res.json({ success: false, error });
    return res.json({ success: true });
  });
});
// Use our router configuration when we call /api
app.use('/api', router);

// session handling cookie monster
//const store = session.Store();
const MongoStore = require('connect-mongo')(session);
app.use(cookieParser());
app.use(session({
    key: 'user_sid',
    secret: getSecret('session'),
    resave: false,
    rolling: false,
    saveUninitialized: true,
    cookie: {
        expires: 600000,
    },
    store: new MongoStore({ mongooseConnection: db }),
})); 

// remove user session cookie if server has no corresponding session
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});

var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/dashboard');
    } else {
        next();
    }    
};

router.get('/login', (req, res) => {
  const { username, userpass } = req.body;
  if (!username || !userpass) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'null: name or pass'
    });
  }
  User.find({ name: username }, (err, user) => {
    if (err) return res.json({ success: false, error: err });
    // SET COOKIE YO
    return res.json({ success: true, data: [] });
  });
});

router.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
    }
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
