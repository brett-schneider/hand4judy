// User.js
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const UserSmol = props => {
	<div class="userSmol">
	    <img alt={ props.name } className="userImageSmol" src={`https://picsum.photos/72?random=${props.id}`} />
	    <h3>{ props.name }</h3>
	    <h3>***star rating***</h3>
	</div>
};

const User = props => {
	<div class="user">
	    <img alt={ props.name } className="userImageSmol" src={`https://picsum.photos/216?random=${props.id}`} />
	    <h1>{ props.name }</h1>
	    <h1>***star rating***</h1>
	</div>
};
export { UserSmol };
export default User;