import React, { Component } from 'react';
import logo from './logo.svg';
import data, { types } from './data';
// /import Item from './Item';
import MainFrame from './MainFrame';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { data: [], 
                   isList: true, 
                   orderByExpiry: true };
  }
  handleTileView = (e) => {
    this.setState( { isList: false } );
    alert(this.state.isList);
  }
  handleListView = () => {
    this.setState( { isList: true } );
    alert(this.state.isList);
  }
  handleOrderByExpiry = () => {
    this.setState( { orderByExpiry: true } );
  }
  handleOrderByDistance = () => {
    this.setState( { orderByExpiry: false } );
  }
  handleTypeSelect = (t) => {
    this.setState( { typeSelected: t.id });
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
