// Item.js
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Item = props => (
  <div className="itemDetail">
    <img alt="itemPicture" className="itemImage" src={`https://picsum.photos/640?random=${props.id}`} />
    <div className="textContent">
      <div className="singleCommentContent">
        <h3>{ props.author }</h3>
        <ReactMarkdown source={props.children} />
      </div>
      <div className="singleCommentButtons">
        <span className="time">{ moment(props.timestamp).fromNow() }</span>
        <a onClick={() => { props.handleUpdateComment(props.id); }}>update</a>
        <a onClick={() => { props.handleDeleteComment(props.id); }}>delete</a>
      </div>
    </div>
  </div>
);

Item.propTypes = {
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
  expiry: PropTypes.instanceOf(Date).isRequired,
};

Item.defaultProps = {
//  id: PropTypes.string.isRequired,
  title: "title",
  imageURI: 'https://picsum.photos/320?random=1', 
  type: "Outdoor",
  side: "offer", //bid
  user: { _id: 9, name: "xtp", location: { lat: 52.5331358, lon: 13.4019551 }},
  description: "",
  pickuptime: "PropTypes.string.isRequired",
//  handleLike: PropTypes.func.isRequired,
  price: "0 £",
//  handleUnlist: PropTypes.func.isRequired,
//  handleReport: PropTypes.func.isRequired,
  timestamp: new Date(),
  location: { lat: 52.5331358, lon: 13.4019551 },
  expiry: new Date(),
};

export default Item;