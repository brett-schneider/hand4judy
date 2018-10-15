// MainFrame.js
import React from 'react';
//import ReactMarkdown from 'react-markdown';
import Browse from './Browse';
import NewItem from './NewItem';
import Messages from './Messages';
import Profile from './Profile';

const MainFrame = (props) => {
  const Menu = props.menu.map(m => (
    <h3 key={ m._id } onClick={() => { props.handleMenuSelect(m._id) }}>{ m.text }</h3>
  ));
//  const Content = props.menu[props.menuActive].tag;
//  const ContentTag = <Content />
//  console.log(Content);
//  WHY NO DYNAMIC TAGS FFS!
  const Content = (props) => {
    switch (props.menuActive) {
      case 0:
        return (<Browse { ...props} />);
      case 1:
        return (<NewItem key="jhgjsgf" { ...props} />);
      case 2:
        return (<Messages { ...props} />);
      case 3:
        return (<Profile { ...props} />);
      default:
        return (<p>this should not happen</p>);
    }
  };
  return ( 
    <div className="mainFrame">
      <div className="logo">
        <h2>handd.it</h2>
      </div>
      <div className="menu">
        { Menu }
      </div>
      <div className="content">
        <Content { ...props } />
      </div>
    </div>
  );
};

export default MainFrame;