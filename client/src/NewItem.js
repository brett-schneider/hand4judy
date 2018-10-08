// NewItem.js
import React from 'react';
import PropTypes from 'prop-types';

const NewItem = (props) => {
  const typeSelect = props.types.map(t => (
  	<option key={t._id} value={ t._id }>{ t.name }</option>
  ));
  return (
  	<form onSubmit={ props.submitNewItem }>
  	  <p>placeholder for image upload</p>
  	  <input type="text" 
  	         name="title"
  	         placeholder="Title..."
//  	         value={ props.title }
  	         onChange={ props.hanldeChangeTitle }
  	  />
  	  <select name="type"
  	          onChange={ props.hanldeChangeType }>
  	    { typeSelect }
  	  </select>
  	  <select name="side"
  	          onChange={ props.hanldeChangeType }>
  		<option value="offer">offer</option>
	  	<option value="bid">bid</option>
  	  </select>
  	  <input type="text" 
  	         name="user"
  	         placeholder="your name... this will be replaced by login in t3h future"
//  	         value={ props.user }
  	         onChange={ props.hanldeChangeUser }
  	  />
  	  <input type="text" 
  	         name="description"
  	         placeholder="Describe in greater detail what your business is..."
//  	         value={ props.description }
  	         onChange={ props.hanldeChangeDescription }
  	  />
  	  <input type="text" 
  	         name="pickuptime"
  	         placeholder="When it's convenient for you..."
//  	         value={ props.pickuptime }
  	         onChange={ props.hanldeChangePickuptime }
  	  />
  	  <input type="text" 
  	         name="price"
  	         placeholder="Show me the moneh..."
//  	         value={ props.price }
  	         onChange={ props.hanldeChangePrice }
  	  />
  	  <input type="hidden" 
  	         name="timestamp"
  	         value={ new Date() }
  	  />
  	  <input type="numeric" 
  	         name="lat"
  	         placeholder="latitude, will be replaced by google maps"
//  	         value={ props.location.lat }
  	         onChange={ props.hanldeChangeLocation }
  	  />
  	  <input type="numeric" 
  	         name="lon"
  	         placeholder="longitude, will be replaced by google maps"
//  	         value={ props.location.lon }
  	         onChange={ props.hanldeChangeLocation }
  	  />
  	  <input type="date" 
  	         name="expiry"
//  	         value={ props.expiry }
  	         onChange={ props.hanldeChangeExpiry }
  	  />
  	</form>
  );
};

NewItem.propTypes = {
//  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageURI: PropTypes.string.isRequired, 
  type: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  pickuptime: PropTypes.string.isRequired,
//  handleLike: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
//  handleUnlist: PropTypes.func.isRequired,
//  handleReport: PropTypes.func.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
  location: PropTypes.object.isRequired,
  expiry: PropTypes.instanceOf(Date).isRequired, // do we need this? few things that are not food expire.
};

export default NewItem;
