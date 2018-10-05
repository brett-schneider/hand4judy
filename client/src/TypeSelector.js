// TypeSelector.js
import React from 'react';
//import ReactMarkdown from 'react-markdown';

const TypeSelector = (props) => {
  const typeSelectorNodes = props.types.map(t => (
    <a key={t._id} onClick={() => { props.handleTypeSelect(t._id); }}>{ t.name }</a>
  ));
  return ( 
    <div className="typeSelect">
      { typeSelectorNodes }
    </div>
  );
}

export default TypeSelector;