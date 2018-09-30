// data.js
const data = [
  { _id: 1, title: "Bugaboo", imageURI: 'https://picsum.photos/320?random=${props.id}', 
    type: "Outdoor", side: "offer", user: "Judy", timestamp: new Date(), price: "350 £",
    location: { lat: 51.482488, lon: 0.005893 } , expires: new Date() },
  { _id: 1, title: "Baby Formula", imageURI: 'https://picsum.photos/320?random=${props.id}', 
    type: "Food", side: "offer", user: "Judy", timestamp: new Date(), price: "free",
    location: { lat: 51.482488, lon: 0.005893 } , expires: new Date() },
  { _id: 1, title: "Ball", imageURI: 'https://picsum.photos/320?random=${props.id}', 
    type: "Toys", side: "offer", user: "Judy", timestamp: new Date(), price: "5 £",
    location: { lat: 51.482488, lon: 0.005893 } , expires: new Date() },
];

const types = [
	{ _id: 1, name: "Outdoor",  },
	{ _id: 2, name: "Toys",     },
	{ _id: 3, name: "Food",     },
	{ _id: 4, name: "Safety",   },
	{ _id: 5, name: "Books",    },
	{ _id: 6, name: "Clothing", },
	{ _id: 7, name: "Hygiene",  },
];

/*
Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageURI: PropTypes.string.isRequired, 
  type: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pickuptime: PropTypes.string.isRequired,
  handleLike: PropTypes.func.isRequired,
//  handleUnlist: PropTypes.func.isRequired,
//  handleReport: PropTypes.func.isRequired,
  timestamp: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  expires: PropTypes.datetime.isRequired,
};
*/

export { types };
export default data;
