// MainFrame.js
import React from 'react';
//import ReactMarkdown from 'react-markdown';
import Browse from './Browse';

const MainFrame = props => (
  <div className="mainFrame">
    <div className="logo">
      <h2>handd.it</h2>
    </div>
    <div className="menu">
      <h3>browse</h3>
      <h3>add</h3>
      <h3>messages</h3>
      <h3>my handd.it</h3>
    </div>
    <div className="content">
      <Browse { ...props } />
    </div>
  </div>
);

export default MainFrame;