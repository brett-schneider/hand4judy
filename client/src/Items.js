// ItemList.js
import React from 'react';
//import ReactMarkdown from 'react-markdown';
import ListItem from './ListItem';
import TileItem from './TileItem';

const Items = props => {
	const Item = props => {
		return (props.isList ? <ListItem className="ListItem" { ...props } /> : <TileItem  className="TileItem" { ...props } />);
	}
	const cName = props => { return ( props.isList ? 'itemList' : 'itemTiles' ); }
  const itemListNodes = props.items.map(i => (
		<Item
			isList={props.isList}
			key={i._id}
			{ ...i }
		/>
  ));
  return ( 
  	<div className={ cName(props) }>
  		{ itemListNodes }
  	</div>
  );
}

export default Items;