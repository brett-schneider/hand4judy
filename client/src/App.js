import React, { Component } from 'react';
import logo from './logo.svg';
import { types } from './data';
// /import Item from './Item';
import MainFrame from './MainFrame';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { items: [], 
                   isList: true, 
                   orderByExpiry: true,
                   types: types,
                   menu: [ { _id:0, text: "browse", tag: "Browse"},
                           { _id:1, text: "add", tag: "ItemNew" },
                           { _id:2, text: "messages", tag: "Messages" },
                           { _id:3, text: "my handd.it", tag: "Profile"}
                         ],
                   menuActive: 0 };
    this.pollInterval = null;
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
  componentDidMount() {
    this.loadCommentsFromServer();
    if (!this.pollInterval) {
      this.pollInterval = setInterval(this.loadCommentsFromServer, 2000);
    }
  }

  componentWillUnmount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  loadCommentsFromServer = () => {
    // fetch returns a promise. If you are not familiar with promises, see
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    fetch('/api/item/')
      .then(data => data.json())
      .then((res) => {
        if (!res.success) this.setState({ error: res.error });
        else this.setState({ items: res.data });
      });
  }

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
