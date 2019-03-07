import React from 'react';

class RightSide extends React.Component {

render() {
	return (
	  	<div className={this.props.className}>
			<span className="number"> 1 </span>
			<p className="text">
			You can find the nodes of the decentralized network in the locations listed below. Each object records and plays back audio messages. It also receives and sends data to and from the rest of the hyper-local network’s nodes. </p>
			<div className="places">
				<li> Media Lab (<a href="https://whereis.mit.edu/?go=E14">link</a>)</li>
				<li> Student Center (<a href="https://whereis.mit.edu/?go=W20">link</a>)</li>
				<li> Muddy Charles Pub (<a href="https://whereis.mit.edu/?go=50">link</a>)</li>
				<li> Dorm (<a href="">link</a>)</li>
				<li> Dorm (<a href="">link</a>)</li>
			</div>
			<span className="number"> 2 </span>
			<p className="text">At each location, you can choose to either use the decentralized network, or one of the "Twitter objects". These objects are entry point to Twitter. They record audio messages, transcribe them and share them on Twitter. </p>
			<a href="https://twitter.com/localobjects" target="_blank"> See what the objects have been tweeting. </a>
	  	</div>
	);
	}
}

export default RightSide;
