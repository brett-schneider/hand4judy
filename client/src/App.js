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
                   menu: [ { _id: 0, text: "browse", tag: "Browse"},
                           { _id: 1, text: "add", tag: "ItemNew" },
                           { _id: 2, text: "messages", tag: "Messages" },
                           { _id: 3, text: "my handd.it", tag: "Profile"}
                         ],
                   menuActive: 0,
                   formdata: {
                     rimageURI: "https://picsum.photos/320?random=1",
                     rtype: '',
                     rlist: '',
                     rtitle: '',
                     rside: '',
                     ruser: { name: '', location: { lat: 0, lon: 0 }},
                     rusername: '',
//                     rlocation: { lat: 0, lon: 0 },
                     rlocationlat: 0,
                     rlocationlon: 0,
                     rdescription: '',
                     rpickuptime: '',
                     rexpiry: new Date(),
                   } };
    this.pollInterval = null;
//    this.handleFormChange = this.handleFormChange.bind(this);
//    this.handleSubmitItem = this.handleSubmitItem.bind(this);
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
  handleFormChange = (e) => {
    const newState = Object.assign({}, this.state);
    newState.formdata[e.target.name] = e.target.value;
    this.setState({ newState }, console.log(JSON.stringify(this.state.formdata)));
  }
  handleSubmitItem = (i) => {
    console.log("handleSubmitItem");
    i.preventDefault();
//    const { rimageURI, rtype, rlist, rtitle, ruser, rlocation, rdescription, rpickuptime, rexpiry } = this.state.formdata;
// nur die zum checken brauchen wir
//    const { rtype, rlist, rtitle, ruser, rlocation, rexpiry } = this.state.formdata;
//    if (!rtype || !rlist || !rtitle || !ruser || !rlocation || !rexpiry) return;
//    if (!rtype || !rlist || !rtitle || !rexpiry) return;
    console.log(JSON.stringify(this.state.formdata));
    fetch('/api/item', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.formdata),
    }).then(res => res.json()).then((res) => {
      if (!res.success) this.setState({ error: res.error.message || res.error });
      else this.setState({ formdata: { rimageURI: '', 
                                       rtype: '', 
                                       rlist: '', 
                                       rtitle: '', 
//                                       ruser: { name: '', location: { lat: 0, lon: 0 }}, 
                                       rusername: '',
//                                       rlocation: { lat: 0, lon: 0 }, 
                                       rlocationlat: 0,
                                       rlocationlon: 0,
                                       rdescription: '', 
                                       rpickuptime: '', 
                                       rexpiry: null }, 
                           error: null });
    });
  }
//  handleUnlistItem = (i) => {
//  }
  componentDidMount() {
    // this should not be here, maybe in places where data is shown
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

    // for some reason this fucks up the state.formdata. ho hum. so handlechange is essential so state gets set.
    fetch('/api/item/')
      .then(data => data.json())
      .then((res) => {
        console.log(res.data);
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
                     handleSubmitItem={ this.handleSubmitItem }
                     handleFormChange={ this.handleFormChange }
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
