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
        <header> LOCAL OBJECTS </header>
        <section>
          <LeftSide onMouseEnter={this.focus} className={this.state.classNameLeft}/>
          <RightSide onMouseEnter={this.focus} className={this.state.classNameRight} />
        </section>
      </div>
    );
  }
}

export default App;
