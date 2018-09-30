// ListTile.js
import React from 'react';
import ReactMarkdown from 'react-markdown';

const ListTile = props => (
  <a onClick={ () => { props.handleListView(); }}>List</a>,
  <a onClick={ () => { props.handleTileView(); }}>Tile</a>
);

export default ListTile;