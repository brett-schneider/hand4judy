// Browse.js
import React, { PureComponent } from 'react';
//import ReactMarkdown from 'react-markdown';
import BrowseMenu from './BrowseMenu';
import Items from './Items';

class Browse extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div className="browse">
        <div className="browse-menu">
          <BrowseMenu { ...this.props } />
        </div>
        <Items items={ this.props.items } isList={ this.props.isList } />
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