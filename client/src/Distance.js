// Distance.js
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

function deg2rad(deg) {
  return deg * (Math.PI/180);
};

function calcDistance(l1,l2) {
  // computeDistanceBetween
  // https://stackoverflow.com/questions/18822948/use-google-maps-computedistancebetween-to-get-the-closest-location-returns-nan

  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(l2.lat-l1.lat);  // deg2rad below
  var dLon = deg2rad(l2.lon-l1.lon); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(l1.lat)) * Math.cos(deg2rad(l2.lat)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
};

const Distance = props => {
  <div className="distance">
    <img className="distanceItem" src={`https://picsum.photos/36?random=${props.id}`} />
    <h1>{ this.calcDistance(props.userLocation, props.itemLoaction) }</h1>
  </div>
};

export default Distance;
