// ListItem.js
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import UserSmol from './User';
import Distance from './Distance';

const ListItem = props => {
  <div className="listItem">
    <img alt="listItemPicture" className="listItemImage" src={`https://picsum.photos/72?random=${props.id}`} />
    <h1 className="listItemTitle">{ props.title }</h1>
    <UserSmol user={ props.user } />
    <Distance item={ props.location } user={ props.user } />
  </div>
};


ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageURI: PropTypes.string.isRequired, 
  type: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pickuptime: PropTypes.string.isRequired,
  handleLike: PropTypes.func.isRequired,
//  handleUnlist: PropTypes.func.isRequired,
//  handleReport: PropTypes.func.isRequired,
  timestamp: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  expires: PropTypes.instanceOf(Date).isRequired,
};

export default ListItem;
