import React, { Component } from 'react';
import logo from './logo.svg';
import data, { types } from './data';
// /import Item from './Item';
import MainFrame from './MainFrame';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { items: data, 
                   isList: true, 
                   orderByExpiry: true,
                   types: types,
                   menu: [ { _id:0, text: "browse", tag: "Browse"},
                           { _id:1, text: "add", tag: "ItemNew" },
                           { _id:2, text: "messages", tag: "Messages" },
                           { _id:3, text: "my handd.it", tag: "Profile"}
                         ],
                   menuActive: 0 };
  }
  handleTileView = (e) => {
    this.setState({ isList: false }, () => console.log(this.state.isList));
  }
  handleListView = () => {
    this.setState({ isList: true });
  }
  handleOrderByExpiry = () => {
    this.setState({ orderByExpiry: true });
  }
  handleOrderByDistance = () => {
    this.setState({ orderByExpiry: false });
  }
  handleTypeSelect = (t) => {
    this.setState({ typeSelected: t }, () => console.log(this.state.typeSelected));
  }
  handleMenuSelect = (m) => {
    this.setState({ menuActive: m }, () => console.log(this.state.menuActive));
  }
//  handleUnlistItem = (i) => {
//  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <MainFrame handleListView={ this.handleListView } 
                     handleTileView={ this.handleTileView } 
                     handleOrderByExpiry={ this.handleOrderByExpiry }
                     handleOrderByDistance={ this.handleOrderByDistance }
                     handleTypeSelect={ this.handleTypeSelect }
                     handleMenuSelect={ this.handleMenuSelect }
                     { ...this.state }
          />
        </div>
      </div>
    );
  }

  // commentbox.js
  /*
  render() {
    return (
      <div className="container">
        <div className="comments">
          <h2>Comments:</h2>
          <CommentList data={DATA} />
        </div>
        <div className="form">
          <CommentForm />
        </div>
      </div>
    );
  }
  */
}

export default App;
