// NewItem.js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

class NewItem extends PureComponent {
	constructor(props) {
    super(props);
    this.state =  {  rimageURI: '',
                     rimage: [],
                     rtype: '',
                     rlist: '',
                     rtitle: '',
                     rside: '',
                     rusername: '',
//                     rlocation: { lat: 0, lon: 0 },
                     rlocationLat: 0,
                     rlocationLon: 0,
                     rdescription: '',
                     rprice: '',
                     rpickuptime: '',
                     rexpiry: '',
                     rtimestamp: '',
                     dropstyle: { background: '#ffffff',
                                  height: '100px',
                                  width: '100px' },
//                     handleSubmitItem: props.handleSubmitItem,
                   }
  }
  handleFormChange = (e) => {
    console.log("handleFormChange");
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    //console.log(newState);
    this.setState(newState, console.log(this.state));
  }
//  handleFormImage = (p) => {
//    console.log("handleFormImage");
//    const newState = this.state;
//    newState.rimage = p;
//    this.setState(newState, console.log(JSON.stringify(this.state)));
//  }
  handleSubmitButton = (i) => {
    i.preventDefault();
    console.log("trying to submit...NewItem.handleSubmitButton");
    this.props.handleSubmitItem(this.state,this.clearForm.bind(this));
  }
  handleFileRead = (f) => {
    console.log("f.target.result",f.target.result);
    let data = f.target.result;
    console.log(btoa(f.target.result));
    this.setState({ rimagedata : data });
  }
  onDrop(rimage) {
    let fr = new FileReader();
    fr.onloadend = this.handleFileRead;
    fr.readAsArrayBuffer(rimage[0]);
    // console.log(rimage[0].preview);
    this.setState({ rimage : { name : rimage[0].name, type: rimage[0].type, }});
    console.log(rimage);
    // let url = rimage && URL.createObjectURL(rimage[0]);
    let url = rimage && rimage[0].preview;
    this.setState({ url });
    //this.setState({ dropstyle : { background: rimage[0].preview, width: "100px", heigh: "100px", }})
  }
  clearForm() {
    console.log("clearForm");
    this.setState({ rimageURI: '',
                    rimage: [],
                    rtype: '',
                    rlist: '',
                    rtitle: '',
                    rside: '',
                    rusername: '',
//                    rlocation: { lat: 0, lon: 0 },
                    rlocationLat: 0,
                    rlocationLon: 0,
                    rdescription: '',
                    rprice: '',
                    rpickuptime: '',
                    rexpiry: '',
                    rtimestamp: '',
                    rimagedata: '',
//                    handleSubmitItem: props.handleSubmitItem,
                   });
  }
  render() {
    const typeSelect = this.props.types.map(t => (
      <option key={t._id} value={ t._id }>{ t.name }</option>
    ));
    const Cimg = (props) => { if (typeof props.src !== 'undefined') return (<img width="100" src={ props.src } alt={ props.src } />); return null}
    return (
    	<form onSubmit={ (i) => { this.handleSubmitButton(i) }}>
    	  <Dropzone name="rimage"
                  accept="image/*"
                  onDrop={ this.onDrop.bind(this) }
                  style={ this.state.dropstyle }
                  multiple={ false }

                  >
          <Cimg src={ this.state.url } alt="no image" />
        </Dropzone>
    	  <input type="text"
    	         name="rtitle"
    	         placeholder="Title..."
    	         value={ this.state.rtitle }
    	         onChange={ (e) => { this.handleFormChange(e) }}
    	  />
    	  <select name="rtype"
    	          onChange={ (e) => { this.handleFormChange(e) }}
                value={ this.state.rtype }
        >

    	    { typeSelect }
    	  </select>
    	  <select name="rside"
    	          onChange={ (e) => { this.handleFormChange(e) }}
                value={ this.state.rside }
        >
    		<option value="offer">offer</option>
  	  	<option value="bid">bid</option>
    	  </select>
    	  <input type="text" 
    	         name="rusername"
    	         placeholder="your name... this will be replaced by login in t3h future. and some hidden input type"
    	         value={ this.state.username }
    	         onChange={ (e) => { this.handleFormChange(e) }}
    	  />
    	  <input type="text" 
    	         name="rdescription"
    	         placeholder="Describe in greater detail what your business is..."
    	         value={ this.state.rdescription }
    	         onChange={ (e) => { this.handleFormChange(e) }}
    	  />
    	  <input type="text" 
    	         name="rpickuptime"
    	         placeholder="When it's convenient for you..."
    	         value={ this.state.rpickuptime }
    	         onChange={ (e) => { this.handleFormChange(e) }}
    	  />
    	  <input type="text" 
    	         name="rprice"
    	         placeholder="Show me the moneh..."
    	         value={ this.state.rprice }
    	         onChange={ (e) => { this.handleFormChange(e) }}
    	  />
    	  <input type="numeric" 
    	         name="rlocationLat"
    	         placeholder="latitude, will be replaced by google maps"
    	         value={ this.state.rlocationLat }
    	         onChange={ (e) => { this.handleFormChange(e) }}
    	  />
    	  <input type="numeric" 
    	         name="rlocationLon"
    	         placeholder="longitude, will be replaced by google maps"
    	         value={ this.state.rlocationLon }
    	         onChange={ (e) => { this.handleFormChange(e) }}
    	  />
    	  <input type="date" 
    	         name="rexpiry"
    	         value={ this.state.expiry }
    	         onChange={ (e) => { this.handleFormChange(e) }}
    	  />
    	  <button type="submit">submit</button>
    	</form>
    );
  }
};

NewItem.propTypes = {
  ruser: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      lat: PropTypes.numeric,
      lon: PropTypes.numeric,
    }),
  }),
  types: PropTypes.array,
  handleSubmitItem: PropTypes.func.isRequired,
};

export default NewItem;
