// TypeSelector.js
import React from 'react';
import ReactMarkdown from 'react-markdown';

const TypeSelector = props => {
  const typeSelectorNodes = props.types.map(t => (
    <a onClick={() => {t.handleSelect(t.id); }}>{ t.name }</a>
  ));
  return ( typeSelectorNodes );
}

export default TypeSelector;