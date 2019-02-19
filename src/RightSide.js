import React from 'react';

import './Right.css';

class RightSide extends React.Component {

render() {
	return (
	  	<div className={this.props.className}>
				<div className="offline">TWEET THE WORLD</div>
				<p className="text">At each location, you can choose to either use the decentralized network, or one of the "Twitter objects". These objects are entry point to Twitter. They record audio messages, transcribe them and share them on Twitter. </p>
				<button className="tweet"> See what these objects have been tweeting. </button>
	  	</div>
	);
	}
}

export default RightSide;
