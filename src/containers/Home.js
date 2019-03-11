import React, { Component } from 'react';
import { Parallax } from "react-parallax";
import styled from "styled-components";
import { CenteredHeader } from './App.js'


const MainDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 10;
  text-align: center;
  height: 150px;
`;

const image2 =
  "https://images.pexels.com/photos/1647063/pexels-photo-1647063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";


class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Hi! I'm Preston. I'm a software developer based in Houston, Texas.</CenteredHeader>
        
        <MainDiv>
          <p>
            I enjoy learning new things everyday, and there is so much I learn from code. I enjoy working on the front end of projects, but I focus on mostly back end implementation. I always learn better ways to write clean code. I started programming in Highschool and recently graduated from DigitalCrafts, a code bootcamp located in downtown Houston.
          </p>
          <p>
          ​  Outside of code, I enjoy <a href="https://www.fivetrackmind.com" target="_blank">making music</a>, playing videogames, and going out with friends.
          </p>
        </MainDiv>
        <Parallax
      bgImage={image2}
      strength={500} >
      <div style={{ height: 300 }}>
      
      </div>
    </Parallax>
      </div>
    );
  }
}

export default Home;
