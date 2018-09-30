// OrderBy.js
import React from 'react';
import ReactMarkdown from 'react-markdown';

const OrderBy = props => (
  <a onClick={ () => { props.handleOrderByExpiry(); }}>By Expiry</a>,
  <a onClick={ () => { props.handleOrderByDistance(); }}>By Distance</a>
);

export default OrderBy;