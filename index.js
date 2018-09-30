import React from 'react';
import ReactDOM from 'react-dom';


class Item extends React.Component {

};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = props;
	}
	renderItemList(items) {
		const allItems = items.map((id,item) => {
			return (
				<div key={id} class="item">
					<img src={item.imgSrc} />
					<User user={item.user} />
					<Distance location={item.location} />
					<Description text={item.description} />
				</div>
			);
		});
		return allItems;
	}
	renderItem(items) {
		return (
			<div key={id} class="item">
				<img src={item.imgSrc} />
				<User user={item.user} />
				<Distance location={item.location} />
				<Available available={item.available} />
				<Pickuptime time={item.expire} />
				<MapView location={item.location} />
				<Likes like={item.like} />
				<Description text={item.description} />
				<Request request={item.request} />
				<Back target={item.backurl} />
			</div>
		);
	}
	render() {
		return (
			<div>
				{renderItems(this.state.items)}
			</div>
			<div>
				<p>
					Habba
				</p>
			</div>
		);
	}
}

ReactDOM.render(
  <App />
  document.getElementById("root")
);
