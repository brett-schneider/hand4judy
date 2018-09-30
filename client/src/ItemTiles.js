// ItemTiles.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import TileItem from './TileItem';

const ItemTiles = (props) => {
  const itemTileNodes = props.items.map(i => (
	<TileItem
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
		expires={i.expires}
	/>
  ));
  return ( itemTileNodes );
}

export default ItemTiles;