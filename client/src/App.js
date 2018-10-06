import React, { Component } from 'react';
import logo from './logo.svg';
import data, { types } from './data';
// /import Item from './Item';
import MainFrame from './MainFrame';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { data: data, 
                   isList: true, 
                   orderByExpiry: true,
                   types: types
                   menu: [ "browse", "add" , "messages" , "my handd.it" ],
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <MainFrame types={ types } 
                     items={ data } 
                     isList={ this.state.isList } 
                     handleListView={ this.handleListView } 
                     handleTileView={ this.handleTileView } 
                     handleOrderByExpiry={ this.handleOrderByExpiry }
                     handleOrderByDistance={ this.handleOrderByDistance }
                     handleTypeSelect={ this.handleTypeSelect }
                     typeSelected={ this.state.typeSelected }
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
