// OrderBy.js
import React from 'react';
//import ReactMarkdown from 'react-markdown';

const OrderBy = props => (
  <div className="orderBy">
	  <a onClick={ () => { props.handleOrderByExpiry(); }}>By Expiry</a>
	  <a onClick={ () => { props.handleOrderByDistance(); }}>By Distance</a>
  </div>
);

export default OrderBy;