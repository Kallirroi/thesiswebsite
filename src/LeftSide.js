import React from 'react';
import './Left.css';

class LefSide extends React.Component {

render() {
	return (
	  	<div className={this.props.className}>
				<div className="offline">LISTEN TO THE INSTITUTE</div>
        <p className="text">You can find the nodes of the decentralized network in the locations listed below. Each object records and plays back audio messages. It also receives and sends data to and from the rest of the hyper-local network’s nodes. </p>

				<img alt="gif" src="https://d2w9rnfcy7mm78.cloudfront.net/3417799/original_641454559eb3cc39f9a450158735f2fa.png?1547595327" />

				<div className="places">
					<li> Media Lab (<a href="https://whereis.mit.edu/?go=E14">link</a>)</li>
					<li> Student Center (<a href="https://whereis.mit.edu/?go=W20">link</a>)</li>
					<li> Muddy Charles Pub (<a href="https://whereis.mit.edu/?go=50">link</a>)</li>
					<li> Dorm (<a href="">link</a>)</li>
					<li> Dorm (<a href="">link</a>)</li>
				</div>
	  	</div>
	);
	}
}

export default LefSide;
