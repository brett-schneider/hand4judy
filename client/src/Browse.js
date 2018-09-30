// Browse.js
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import TypeSelector from './TypeSelector';
import ListTile from './ListTile';
import OrderBy from './OrderBy';
import ItemList from './ItemList';
import ItemTiles from './ItemTiles';

class Browse extends Component {
  constructor(props) {
    super(props);
    const show = this.props.isList ? <ItemList items={ this.props.items } /> : <ItemTiles items={ this.props.items } />;
  }
  render() {
    return (
      <div className="browse">
        <div className="itemType">
          <TypeSelector types={ this.props.types } />
          <ListTile />
          <OrderBy />
        </div>
        { this.show }
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