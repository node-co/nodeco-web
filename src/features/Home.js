import React, { Component } from 'react';
import HomeParticles from '../features/HomeParticles';
import WelcomeMessage from '../features/WelcomeMessage';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <WelcomeMessage />
        <HomeParticles />
      </div>);
  }
}

export default Home;