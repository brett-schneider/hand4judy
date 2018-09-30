// model/item.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.Schema.Types;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const ItemsSchema = new Schema({
	title: String, 
	imageURI: String, 
	type: String,  // hygene, toy, safety, car
	side: String,  // want, have
	user: User, 
	location: Location, 
	description: String, 
	pickuptime: String, 
	expire: SchemaTypes.double,
}, { timestamps: true });

// export our module to use in server.js
export default mongoose.model('Item', ItemsSchema);