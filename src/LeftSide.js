import React from 'react';
import './Left.css';

class LefSide extends React.Component {

render() {
	console.log(this.props.className)
	return (
	  	<div className={this.props.className}>
        <p>Come speak to these objects in real life! You can find them below: </p>
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
