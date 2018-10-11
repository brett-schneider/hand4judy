// models/item.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.Schema.Types;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const LocationSchema = new Schema({
	lat: Number,
	lon: Number,
});

const UserSchema = new Schema({
	name: String, 
	location: LocationSchema,
});

const ItemsSchema = new Schema({
	title: String, 
	imageURI: String, 
	type: String,  // hygene, toy, safety, car
	side: String,  // offer, bid
	user: UserSchema, 
//	user: { name: String, location: { lat: Number. lon: Number }},
	description: String, 
	pickuptime: String, 
	proce: String,
	timestamp: Date,
	location: LocationSchema, 
//	location: { lat: Number. lon: Number }, 
	expiry: Date,
}, { timestamps: true });

// export our module to use in server.js
const Location = mongoose.model('Location', LocationSchema);
const User = mongoose.model('User', UserSchema);
const Item = mongoose.model('Item', ItemsSchema);
export { Location, User };
export default Item;
