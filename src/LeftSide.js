import React from 'react';
import './Left.css';

class LefSide extends React.Component {

render() {
	console.log(this.props.className)
	return (
	  	<div className={this.props.className}>
				<div className="offline">PARTICIPATE OFFLINE</div>
        <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. </p>
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
