// NewItem.js
import React from 'react';
import PropTypes from 'prop-types';

const NewItem = (props) => {
  function deg2rad(deg) {
    return deg * (Math.PI/180);
  };

  function calcDistance(l1,l2) {
    // computeDistanceBetween
    // https://stackoverflow.com/questions/18822948/use-google-maps-computedistancebetween-to-get-the-closest-location-returns-nan

    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(l2.lat-l1.lat);  // deg2rad below
    var dLon = deg2rad(l2.lon-l1.lon); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(l1.lat)) * Math.cos(deg2rad(l2.lat)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
//    return Math.round(d,2);
    return d.toPrecision(3);
  };

  return (
  	<form onSubmit={ props.submitNewItem }>
  	  <p>placeholder for image upload</p>
  	  <input type="text" 
  	         name="title"
  	         placeholder="Title..."
  	         value={ props.title }
  	         onChange={ props.hanldeChangeTitle }
  	  />
  	  <input type="pulldown" 
  	         name="type"
  	         value={ props.types }
  	         onChange={ props.hanldeChangeType }
  	  />
  	  <input type="radio" 
  	         name="side"
  	         value={ [ 'offer', 'bid' ] }
  	         onChange={ props.hanldeChangeSide }
  	  />
  	  <input type="text" 
  	         name="user"
  	         placeholder="your name... this will be replaced by login in t3h future"
  	         value={ props.user }
  	         onChange={ props.hanldeChangeUser }
  	  />
  	  <input type="text" 
  	         name="description"
  	         placeholder="Describe in greater detail what your business is..."
  	         value={ props.description }
  	         onChange={ props.hanldeChangeDescription }
  	  />
  	  <input type="text" 
  	         name="pickuptime"
  	         placeholder="When it's convenient for you..."
  	         value={ props.pickuptime }
  	         onChange={ props.hanldeChangePickuptime }
  	  />
  	  <input type="text" 
  	         name="price"
  	         placeholder="Show me the moneh..."
  	         value={ props.price }
  	         onChange={ props.hanldeChangePrice }
  	  />
  	  <input type="hidden" 
  	         name="timestamp"
  	         value={ currentTime }
  	  />
  	  <input type="numeric" 
  	         name="lat"
  	         placeholder="latitude, will be replaced by google maps"
  	         value={ props.location.lat }
  	         onChange={ props.hanldeChangeLocation }
  	  />
  	  <input type="numeric" 
  	         name="lon"
  	         placeholder="longitude, will be replaced by google maps"
  	         value={ props.location.lon }
  	         onChange={ props.hanldeChangeLocation }
  	  />
  	  <input type="date" 
  	         name="expiry"
  	         value={ props.expiry }
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

export default Distance;
