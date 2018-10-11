// Profile.js
import React, { Component } from 'react';
//import ReactMarkdown from 'react-markdown';
import BrowseMenu from './BrowseMenu';
import ItemList from './ItemList';
import ItemTiles from './ItemTiles';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.isList ? <ItemList items={ this.props.items } /> : <ItemTiles items={ this.props.items } />,
    }
  }
  render() {
    return (
      <div className="profile">
        <BrowseMenu { ...this.props } />
        <p>your profile</p>
        <p>your items</p>
        { this.state.show }
      </div>
    );
  };
}

export default Profile;