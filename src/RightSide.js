import React from 'react';

import './Right.css';

class RightSide extends React.Component {

render() {
	return (
	  	<div className={this.props.className}>
				<p>If you don't want to that, you can also leave your message below. </p>
				<button className="record"> Record </button>

				<div className="recordings">
					<li> message #1 <span> download </span> </li>
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
