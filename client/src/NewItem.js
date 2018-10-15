// NewItem.js
import React from 'react';
import PropTypes from 'prop-types';

const NewItem = (props) => {
  const typeSelect = props.types.map(t => (
  	<option key={t._id} value={ t._id }>{ t.name }</option>
  ));
  return (
  	<form onSubmit={ (i) => { props.handleSubmitItem(i) }}>
  	  <p>placeholder for image upload</p>
  	  <input type="text" 
  	         name="rtitle"
  	         placeholder="Title..."
  	         value={ props.formdata.rtitle }
  	         onChange={ (e) => { props.handleFormChange(e) }}
  	  />
  	  <select name="rtype"
  	          onChange={ (e) => { props.handleFormChange(e) }}
              value={ props.formdata.rtype }
      >

  	    { typeSelect }
  	  </select>
  	  <select name="rside"
  	          onChange={ (e) => { props.handleFormChange(e) }}
              value={ props.formdata.rside }
      >
  		<option value="offer">offer</option>
	  	<option value="bid">bid</option>
  	  </select>
  	  <input type="text" 
  	         name="rusername"
  	         placeholder="your name... this will be replaced by login in t3h future. and some hidden input type"
  	         value={ props.formdata.rusername }
  	         onChange={ (e) => { props.handleFormChange(e) }}
  	  />
  	  <input type="text" 
  	         name="rdescription"
  	         placeholder="Describe in greater detail what your business is..."
  	         value={ props.formdata.rdescription }
  	         onChange={ (e) => { props.handleFormChange(e) }}
  	  />
  	  <input type="text" 
  	         name="rpickuptime"
  	         placeholder="When it's convenient for you..."
  	         value={ props.formdata.rpickuptime }
  	         onChange={ (e) => { props.handleFormChange(e) }}
  	  />
  	  <input type="text" 
  	         name="rprice"
  	         placeholder="Show me the moneh..."
  	         value={ props.formdata.rprice }
  	         onChange={ (e) => { props.handleFormChange(e) }}
  	  />
  	  <input type="hidden" 
  	         name="rtimestamp"
  	         value={ new Date() }
  	  />
  	  <input type="numeric" 
  	         name="rlocationLat"
  	         placeholder="latitude, will be replaced by google maps"
  	         value={ props.formdata.rlocationLat }
  	         onChange={ (e) => { props.handleFormChange(e) }}
  	  />
  	  <input type="numeric" 
  	         name="rlocationLon"
  	         placeholder="longitude, will be replaced by google maps"
  	         value={ props.formdata.rlocationLon }
  	         onChange={ (e) => { props.handleFormChange(e) }}
  	  />
  	  <input type="date" 
  	         name="rexpiry"
  	         value={ props.formdata.rexpiry }
  	         onChange={ (e) => { props.handleFormChange(e) }}
  	  />
  	  <button type="submit">submit</button>
  	</form>
  );
};

NewItem.propTypes = {
  formdata: PropTypes.shape({
//    id: PropTypes.string.isRequired,
    rtitle: PropTypes.string,
    rimageURI: PropTypes.string, 
    rtype: PropTypes.string,
    rside: PropTypes.string,
//    ruser: PropTypes.object,
    rusername: PropTypes.string,
    rdescription: PropTypes.string,
    rpickuptime: PropTypes.string,
//    handleLike: PropTypes.func.isRequired,
    rprice: PropTypes.string,
//    handleUnlist: PropTypes.func.isRequired,
//    handleReport: PropTypes.func.isRequired,
    rtimestamp: PropTypes.instanceOf(Date),
//    location: PropTypes.object,
    rlocationLat: PropTypes.numeric,
    rlocationLon: PropTypes.numeric,
//    rexpiry: PropTypes.instanceOf(Date), // do we need this? few things that are not food expire.  	
    rexpiry: PropTypes.string, // do we need this? few things that are not food expire.  	
  }),
  handleSubmitItem: PropTypes.func.isRequired,
  handleFormChange: PropTypes.func.isRequired,
};

export default NewItem;
