// data.js
const user = [
	{ _id: 1, name: "Judy", location: { lat: 51.530869, lon: -0.061242 }},
];

const data = [
  { _id: 1, title: "Bugaboo", imageURI: 'https://picsum.photos/320?random=1', 
    type: "Outdoor", side: "offer", user: user[0], description: "a Bugaboo buggy", 
    pickuptime: "after 5pm", timestamp: new Date(), price: "350 £",
    location: { lat: 51.482488, lon: 0.005893 } , expires: new Date() },
  { _id: 2, title: "Baby Formula", imageURI: 'https://picsum.photos/320?random=2', 
    type: "Food", side: "offer", user: user[0], description: "sma progress 1", 
    pickuptime: "after 5pm", timestamp: new Date(), price: "free", 
    location: { lat: 51.482488, lon: 0.005893 } , expires: new Date() },
  { _id: 3, title: "Ball", imageURI: 'https://picsum.photos/320?random=3', 
    type: "Toys", side: "offer", user: user[0], description: "rubber ball with polka dots", 
    pickuptime: "after 5pm", timestamp: new Date(), price: "5 £",
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

export { types, user };
export default data;
