import React from 'react';
import './Left.css';

class LefSide extends React.Component {

render() {
	return (
	  	<div className={this.props.className}>
        <div className="text">
				<p><span className="underline">FAQ</span></p>
				<p>• Are the decentralized network devices secure?</p>
				<p>The objects are connected with each other in a cryptographically secure and decentralized way (using a p2p protocol called <a href="https://datproject.org/" target="_blank">Dat</a>). The micro-controllers that power them are also secure - so there is no danger of your message escaping the confines of this hyperlocal network. The recording functionality starts and ends with the button press.</p>


				<p>• Who can listen to your message?</p>

				<p>Anyone who has physical access to the objects. The researcher conducting the study will also listen to, as well as transcribe, the messages that have been recorded during the course of the study. The transcripts will not become public, but the insights derived from them (e.g. length of message, emotional valence) will be published as part of the researcher’s Master’s thesis.</p>

				</div>

				<p className="italics">This is a Master's project by <a href="https://kalli-retzepi.com/">Kalli Retzepi</a>. </p>
	  	</div>
	);
	}
}

export default LefSide;
