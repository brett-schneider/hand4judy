// ListTile.js
import React from 'react';
//import ReactMarkdown from 'react-markdown';

const ListTile = props => (
	<div className="listTile">
		<a onClick={ () => { props.handleListView(); }}>List</a>
		<a onClick={ () => { props.handleTileView(); }}>Tile</a>
	</div>
);

export default ListTile;