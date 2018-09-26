import React, { Component } from 'react';

import { CenteredHeader } from './App.js'

class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi! I'm Preston. I'm a software developer based in Houston, Texas.</CenteredHeader>
        <p>
          I'm comfortable throughout the stack, but my passion lies in the back end, at the intersection of code and functionality. I currently write software at the coding cohort DigitalCrafts in Houston.
        </p>
        <p>
          ​Outside of code, I like to create in other ways. From <a href="#" target="_blank">making music</a> to <a href="#" target="_blank">coaching a highschool wrestling team</a>, I'm always trying new ways of expressing and involving myself. I also enjoy meditating, listening to music, and helping out my community.
        </p>
      </div>
    );
  }
}

export default Home;
