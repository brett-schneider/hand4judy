// ItemList.js
import React from 'react';
//import ReactMarkdown from 'react-markdown';
import ListItem from './ListItem';

const ItemList = props => {
  const itemListNodes = props.items.map(i => (
	<ListItem
		id={i._id}
		key={i._id}
		title={i.title}
		imageURI={i.imageURI}
		type={i.type}
		side={i.side}
		user={i.user}
		description={i.description}
		pickuptime={i.pickuptime}
		handleLike={i.handleLike}
		timestamp={i.timestamp}
		location={i.location}
		expiry={i.expiry}
	/>
  ));
  return ( 
  	<div className="ItemList">
  		{ itemListNodes }
  	</div>
  );
}

export default ItemList;