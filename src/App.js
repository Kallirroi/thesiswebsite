import React, { Component } from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classNameLeft: 'left',
      classNameRight: 'right',
    };
    this.focus = this.focus.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mouseover', this.focus);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseover', this.focus);
  }

  focus(e) {
    if (e.target.className === 'left') {
      this.setState({
        classNameLeft: 'left-focused',
        classNameRight: 'right'
      })
    }
    else if (e.target.className === 'right')  {
      this.setState({
        classNameLeft: 'left',
        classNameRight: 'right-focused'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="header" > LOCAL OBJECTS </header>
        <section className="details">
          <div className="column column-1"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. </div>
          <div className="column column-2"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.  </div>
          <div className="column column-3">
            <p>QUESTION OF THE DAY</p>
            <div className="prompt"> If you could wake up tomorrow having gained any one quality or ability, what would it be? </div>
          </div>
        </section>

        <section className="choices">
          <LeftSide onMouseEnter={this.focus} className={this.state.classNameLeft}/>
          <RightSide onMouseEnter={this.focus} className={this.state.classNameRight} />
        </section>
      </div>
    );
  }
}

export default App;
