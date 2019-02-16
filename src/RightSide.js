import React from 'react';

import './Right.css';

class RightSide extends React.Component {

render() {
	return (
	  	<div className={this.props.className}>
				<div className="offline">TWEET THE INSTITUTE</div>
				<p className="text">At each location, you can choose to either use the decentralized network, or one of the "Twitter objects". These objects are entry point to Twitter. They record audio messages, transcribe them and share them on Twitter. </p>

				<button className="tweet"> See what these objects have been tweeting. </button>

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
