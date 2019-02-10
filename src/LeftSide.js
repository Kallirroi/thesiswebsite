import React from 'react';

class LefSide extends React.Component {

render() {
	console.log(this.props.className)
	return (
	  	<div className={this.props.className}>
        This is left!
	  	</div>
	);
	}
}

export default LefSide;
