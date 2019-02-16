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
    console.log(this.state.classNameApp)
    return (
      <div>
        <div className={this.state.classNameApp}>
          <header className="header" > LOCAL OBJECTS </header>
          <section className="details">
            <div className="column column-1"> How does the nature of a network shape the discourse its users have? How does what one says differ if they know that it will remain within a local network versus being shared on Twitter? The Viral Communications group at the Media Lab is interested in exploring these questions by deploying networks of physical objects in designated locations around the campus. These objects either form a small-scale, hyperlocal and decentralized (p2p) network, or they are entry points to Twitter. </div>
            <div className="column column-2"> In both cases, the function and purpose of each network and overall project will be clearly stated via text on a label next to the object (that text is detailed in the supplemental material), as well as the project-specific website. No identifiers linked to subjects will be collected, other than their voice recorded in the message. Thus, the identity of the human subjects won’t be able to readily be ascertained. The messages collected will be transcribed and then analyzed using Natural Language Processing methods. The transcripts of the audio messages will not be made public, but the insights derived from them will be discussed as part of the researcher’s Master’s thesis.</div>
          </section>

          <section className="choices">
            <LeftSide onMouseEnter={this.focus} className={this.state.classNameLeft}/>
            <RightSide onMouseEnter={this.focus} className={this.state.classNameRight} />
          </section>
        </div>
      </div>

    );
  }
}

export default App;
