import React from 'react';
import './Left.css';

class LefSide extends React.Component {

render() {
	return (
	  	<div className={this.props.className}>
				<div className="offline">LISTEN TO THE INSTITUTE</div>
        <p className="text">You can find the nodes of the decentralized network in the locations listed below. Each object records and plays back audio messages. It also receives and sends data to and from the rest of the hyper-local network’s nodes. </p>
        <p className="text">Simply put the headphones on, and listen to the audio stream! If you wish to record your own message, press the button to trigger the recorder, speak towards the object, and press the button again to end the recording. Because the objects communicate with each other and exchange content, you might hear audio messages recorded at a different location. </p>
				<div className="places">
				<li> place # 1</li>
				<li> place # 2</li>
				<li> place # 3</li>
				<li> place # 4</li>
				<li> place # 5</li>
				</div>
	  	</div>
	);
	}
}

export default LefSide;
