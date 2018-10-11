// BrowseMenu.js
import React from 'react';
//import ReactMarkdown from 'react-markdown';

const TypeSelector = (props) => {
  const typeSelectorNodes = props.types.map(t => (
    <a key={t._id} onClick={() => { props.handleTypeSelect(t._id); }}>{ t.name }</a>
  ));
  return ( 
    <div className="typeSelect">
      { typeSelectorNodes }
    </div>
  );
}

const ListTile = props => (
  <div className="listTile">
    <a onClick={ () => { props.handleListView(); }}>List</a>
    <a onClick={ () => { props.handleTileView(); }}>Tile</a>
  </div>
);

const OrderBy = props => (
  <div className="orderBy">
    <a onClick={ () => { props.handleOrderByExpiry(); }}>By Expiry</a>
    <a onClick={ () => { props.handleOrderByDistance(); }}>By Distance</a>
  </div>
);

const BrowseMenu = props => (
  <div className="browse-menu">
    <TypeSelector types={ props.types } selected={ props.typeSelected } handleTypeSelect={ props.handleTypeSelect } />
    <ListTile handleListView={ props.handleListView } handleTileView={ props.handleTileView } />
    <OrderBy handleOrderByExpiry={ props.handleOrderByExpiry } handleOrderByDistance={ props.handleOrderByDistance } />
  </div>
);

export default BrowseMenu;