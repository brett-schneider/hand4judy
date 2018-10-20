// Profile.js
import React from 'react';
//import ReactMarkdown from 'react-markdown';
import BrowseMenu from './BrowseMenu';
import Items from './Items';
import PropTypes from 'prop-types';

const Profile = props => {
  return (
    <div className="profile">
      <BrowseMenu { ...this.props } />
      <p>your profile</p>
      <p>your items</p>
      <Items items={ this.props.items } isList={ this.props.isList } />
    </div>
  );
}

Profile.propTypes = {
  items: PropTypes.array,
  isList: PropTypes.bool,
  user: PropTypes.shape({
  	name: PropTypes.string,
  	location: PropTypes.shape({
  		lat: PropTypes.numeric,
  		lon: PropTypes.numeric,
  	})
  })
};

export default Profile;