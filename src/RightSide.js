import React from 'react';

import './Right.css';

class RightSide extends React.Component {

render() {
	return (
	  	<div className={this.props.className}>
				<div className="offline">PARTICIPATE ONLINE</div>
				<p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. </p>

				<button className="record"> Tweet your response </button>

				<div className="recordings"> {/* I have set this to display: none */}
				Those who have participated online said:
					<li> message #1 </li>
					<li> message #2 </li>
					<li> message #3 </li>
					<li> message #4 </li>
					<li> message #5 </li>
				</div>
	  	</div>
	);
	}
}

export default RightSide;
