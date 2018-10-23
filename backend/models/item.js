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
	location: { type: LocationSchema, 
							ref: "location", },
});

const ImageSchema = new Schema({
	name: String, 
	type: { type : String, },
	data: Buffer,
	path: String,
});

const ItemsSchema = new Schema({
	title: String, 
	image: { type: ImageSchema,
					 ref: "image", },
	imageURI: String, 
	type: { type: String, },  // hygene, toy, safety, car
	side: String,  // offer, bid
	user: { type: UserSchema, 
					ref: "user", },
//	user: { name: String, location: { lat: Number. lon: Number }},
	description: String, 
	pickuptime: String, 
	price: String,
	timestamp: Date,
	location: { type: LocationSchema, 
							ref: "location", },
//	location: { lat: Number. lon: Number }, 
	expiry: Date,
}, { timestamps: true });

// export our module to use in server.js
const Location = mongoose.model('Location', LocationSchema);
const User = mongoose.model('User', UserSchema);
const Item = mongoose.model('Item', ItemsSchema);
const Image = mongoose.model('Image', ImageSchema);
export { Location, User, Image };
export default Item;
