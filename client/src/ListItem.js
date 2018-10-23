// ListItem.js
import React from 'react';
//import moment from 'moment';
import PropTypes from 'prop-types';
//import ReactMarkdown from 'react-markdown';
import { UserSmol } from './User';
import Distance from './Distance';

const ListItem = props => {
  const str2ab = (str) => {
    var buf = new ArrayBuffer(str.length); // 2 bytes for each char
    var bufView = new Uint8Array(buf);
    for (var i=0, strLen=str.length; i<strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  } 
  const ImgSrc = props => {
    if (!props.image) {
      if (!props.imageURI) {
        // console.log(`https://picsum.photos/72?random=${props._id}`);
        return <img width="72px" alt="listItemPicture" className="listItemImage" src={ `https://picsum.photos/72?random=${props._id}` } />;
      } else {
        return <img width="72px" alt="listItemPicture" className="listItemImage" src={ props.imageURI } />;
      }
    } else {
      console.log(props.image.data);
      let fdat = new Uint8Array(props.image.data.data);
      let str = new TextDecoder("utf-8").decode(fdat);
      let rr = str2ab(str);
      console.log(props.image.name,rr);
      let i = new File([rr],props.image.name,{ type: "image/jpeg" });
      console.log("file image", i);
      let url = URL.createObjectURL(i);
      console.log("url",url);
      return <img width="72px" alt="listItemPicture" className="listItemImage" src={ url } />;
    }
  }
  return (
    <div className="listItem">
      <ImgSrc imageURI={ props.imageURI } image={ props.image } _id={ props._id } />
      <h1 className="listItemTitle">{ props.title }</h1>
      <UserSmol user={ props.user } />
      <Distance item={ props.location } user={ props.user.location } />
    </div>
  );
};


ListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string,
  imageURI: PropTypes.string, 
  type: PropTypes.string,
  side: PropTypes.string,
  image: PropTypes.object,
  user: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      lat: PropTypes.numeric,
      lon: PropTypes.numeric,
    }),
  }),
  description: PropTypes.string,
  pickuptime: PropTypes.string,
//  handleLike: PropTypes.func.isRequired,
//  handleUnlist: PropTypes.func.isRequired,
//  handleReport: PropTypes.func.isRequired,
  timestamp: PropTypes.instanceOf(Date),
  location: PropTypes.object,
//  expiry: PropTypes.instanceOf(Date).isRequired,
  expiry: PropTypes.string,
};

ListItem.defaultProps = {
  imageURI: 'https://picsum.photos/320?random=1', 
  user: { _id: 9, name: "xtp", location: { lat: 52.5331358, lon: 13.4019551 }},
  timestamp: new Date(),
  location: { lat: 52.5331358, lon: 13.4019551 },
  expiry: new Date().toString(),
};

export default ListItem;
