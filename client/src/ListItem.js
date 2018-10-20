// ListItem.js
import React from 'react';
//import moment from 'moment';
import PropTypes from 'prop-types';
//import ReactMarkdown from 'react-markdown';
import { UserSmol } from './User';
import Distance from './Distance';

const ListItem = props => (
  <div className="listItem">
    <img alt="listItemPicture" className="listItemImage" src={`https://picsum.photos/72?random=${props.id}`} />
    <h1 className="listItemTitle">{ props.title }</h1>
    <UserSmol user={ props.user } />
    <Distance item={ props.location } user={ props.user.location } />
  </div>
);


ListItem.propTypes = {
//  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  imageURI: PropTypes.string, 
  type: PropTypes.string,
  side: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      lat: PropTypes.numeric,
      lon: PropTypes.numeric,
    }),
  }),
  description: PropTypes.string,
  pickuptime: PropTypes.string,
//  handleLike: PropTypes.func.isRequired,
//  handleUnlist: PropTypes.func.isRequired,
//  handleReport: PropTypes.func.isRequired,
  timestamp: PropTypes.instanceOf(Date),
  location: PropTypes.object,
//  expiry: PropTypes.instanceOf(Date).isRequired,
  expiry: PropTypes.string,
};

ListItem.defaultProps = {
  imageURI: 'https://picsum.photos/320?random=1', 
  user: { _id: 9, name: "xtp", location: { lat: 52.5331358, lon: 13.4019551 }},
  timestamp: new Date(),
  location: { lat: 52.5331358, lon: 13.4019551 },
  expiry: new Date().toString(),
};

export default ListItem;
