// Browse.js
import React, { Component } from 'react';
//import ReactMarkdown from 'react-markdown';
import BrowseMenu from './BrowseMenu';
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
          <BrowseMenu { ...this.props } />
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