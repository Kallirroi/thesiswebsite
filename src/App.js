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
      classNameApp: 'App',
    };
    this.focus = this.focus.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mouseover', this.focus);
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }


  componentWillUnmount() {
    window.removeEventListener('mouseover', this.focus);
  }

  resize() {
    let showFallback = (window.innerWidth <= 760);
    if (showFallback) {
        this.setState({classNameApp: 'App-Fallback'});
    }
    else {
      this.setState({classNameApp: 'App'});

    }
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
      <div>
        <div className={this.state.classNameApp}>
          <header className="header" > LOCAL OBJECTS </header>
          <section className="details">
            <div className="column column-1">
            <p>How does the nature of a network shape the discourse its users have? How does what one says differ if they know that it will remain within a local network versus being shared on Twitter?</p>
            <p>The <a href="https://www.media.mit.edu/groups/viral-communications/overview/" target="_blank">Viral Communications</a> group at the Media Lab is interested in exploring these questions by deploying networks of physical objects in designated locations around the campus. These objects either form a small-scale, hyperlocal p2p network (case 1 below), or they are entry points to Twitter (case 2 below). </p> </div>
            <div className="column column-2">
              <img alt="image" src="2.png" width="100%" />
            </div>
          </section>

          <section className="choices">
            {/*<LeftSide onMouseEnter={this.focus} className={this.state.classNameLeft}/>
            <RightSide onMouseEnter={this.focus} className={this.state.classNameRight} /> */}
            <RightSide className="right"/>
            <LeftSide className="left"/>
          </section>
        </div>
      </div>

    );
  }
}

export default App;
