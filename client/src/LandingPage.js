// LandingPage.js
import React from 'react';
//import ReactMarkdown from 'react-markdown';

const LandingPage = (props) => (

);

const MainFrame = (props) => {
  const Menu = props.menu.map(m => (
    <h3 key={ m._id } onClick={() => { props.handleMenuSelect(m._id) }}>{ m.text }</h3>
  ));
//  const Content = props.menu[props.menuActive].tag;
//  const ContentTag = <Content />
//  console.log(Content);
//  WHY NO DYNAMIC TAGS FFS!
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