// ItemList.js
import React from 'react';
//import ReactMarkdown from 'react-markdown';
import ListItem from './ListItem';
import TileItem from './TileItem';

const Items = props => {
	const Item = props => {
		return (props.isList ? <ListItem className="ListItem" { ...this.props } /> : <TileItem  className="TileItem" { ...this.props } />);
	}
	const cName = props => { return ( props.isList ? 'itemList' : 'itemTiles' ); }
  const itemListNodes = props.items.map(i => (
		<Item
			isList={props.isList}
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
  	<div className={ cName(props) }>
  		{ itemListNodes }
  	</div>
  );
}

export default Items;