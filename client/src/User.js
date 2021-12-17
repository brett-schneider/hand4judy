// User.js
import React from 'react';
//import moment from 'moment';
//import PropTypes from 'prop-types';
//import ReactMarkdown from 'react-markdown';

const UserSmol = props => (
	<div className="userSmol">
	    <img alt={ props.user.name } className="userImageSmol" src={`https://picsum.photos/36?random=${props.id}`} />
	    <p>{ props.user.name }</p>
	    <p>***star rating***</p>
	</div>
);

const User = props => (
	<div className="user">
	    <img alt={ props.user.name } className="userImage" src={`https://picsum.photos/216?random=${props.id}`} />
	    <p>{ props.user.name }</p>
	    <p>***star rating***</p>
	</div>
);
export { UserSmol };
export default User;