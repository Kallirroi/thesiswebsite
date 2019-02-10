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
          <div className="column column-1"> This is a way to document the progress of my Master's thesis. It's partly a way to force myself to do work every day, partly a way to participate in https://pwr.now.sh/, and partly a way to use tools developed by the are.na community, like the platform this website is built upon (https://there.am).  I will be posting images, thoughts, short texts, sometimes incomprehensible or cryptic bullet points, but hopefully in the end I will have a working prototype of my thesis proposal.This is a way to document the progress of my Master's thesis. It's partly a way to force myself to do work every day, partly a way to participate in https://pwr.now.sh/, and partly a way to use tools developed by the are.na community, like the platform this website is built upon (https://there.am).  I will be posting images, thoughts, short texts, sometimes incomprehensible or cryptic bullet points, but hopefully in the end I will have a working prototype of my thesis proposal.  </div>
          <div className="column column-2"> Roughly, the idea is that I will design, fabricate and deploy in the world a number of objects that will capture, play and share in a p2p way audio messages. My motivation is to explore how a small decentralized network, supported by these physical nodes, performs in a real world scenario (in this case, the MIT campus), how the audience interacts with it and whether the nature of information collected by these objects differs from what could be carried by a conventional website.  Roughly, the idea is that I will design, fabricate and deploy in the world a number of objects that will capture, play and share in a p2p way audio messages. My motivation is to explore how a small decentralized network, supported by these physical nodes, performs in a real world scenario (in this case, the MIT campus), how the audience interacts with it and whether the nature of information collected by these objects differs from what could be carried by a conventional website.   </div>
          <div className="column column-3">
            <p>QUESTION OF THE DAY</p>
            <div className="prompt"> Which Democrat do you think should run against Trump for the 2020 Presidential election, and why? </div>
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
