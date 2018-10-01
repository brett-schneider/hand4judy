// TileItem.js
import React from 'react';
//import PropTypes from 'prop-types';
//import ReactMarkdown from 'react-markdown';
import Item from './Item';
import User from './User';
import Distance from './Distance';

const TileItem = props => (
  <div className="tileItem">
    <h1 className="tileItemTitle">{ props.title }</h1>
    <img alt="tileItemPicture" className="tileItemImage" src={`https://picsum.photos/240?random=${props.id}`} />
    <User user={ props.user } />
    <Distance item={ props.location } user={ props.user } />
    <p>TileItem Render</p>
  </div>
);

TileItem.propTypes = Item.propTypes;

export default TileItem;