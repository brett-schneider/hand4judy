// Browse.js
import React, { Component } from 'react';
//import ReactMarkdown from 'react-markdown';
import TypeSelector from './TypeSelector';
import ListTile from './ListTile';
import OrderBy from './OrderBy';
import ItemList from './ItemList';
import ItemTiles from './ItemTiles';

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.isList ? <ItemList items={ this.props.items } /> : <ItemTiles items={ this.props.items } />,
    }
  }
  render() {
    return (
      <div className="browse">
        <div className="browse-menu">
          <TypeSelector types={ this.props.types } selected={ this.props.typeSelected } handleTypeSelect={ this.props.handleTypeSelect } />
          <ListTile handleListView={ this.props.handleListView } handleTileView={ this.props.handleTileView } />
          <OrderBy handleOrderByExpiry={ this.props.handleOrderByExpiry } handleOrderByDistance={ this.props.handleOrderByDistance } />
        </div>
        { this.state.show }
      </div>
    );
  };
}
/*
const Browse = props => (
  <div className="browse">
    <div className="itemType">
      <TypeSelector types={ props.types } />
      <ListTile />
      <OrderBy />
    </div>
    { props.isList ? <ItemList items={ props.items } /> : <ItemTiles items={ props.items } /> }
  </div>
)*/

export default Browse;