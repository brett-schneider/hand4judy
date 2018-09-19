import React from 'react';
import ReactDOM from 'react-dom';


class Item extends React.Component {

};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = props;
	}
	renderItems(items) {
		const allItems = items.map((id,item) => {
			return (
				<div key={id} class="item">
					<img src={item.imgSrc} />

				</div>
			)
		});
	}
	render() {
		return (
			<div>
				{renderItems(this.state.items)}
			</div>
		);
	}
}

ReactDOM.render(
  React.createElement("div", null, "Hello World"), // <div>Hello World</div>
  document.getElementById("root")
);
