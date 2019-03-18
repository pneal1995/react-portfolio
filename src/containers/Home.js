import React, { Component } from 'react';
import { Parallax } from "react-parallax";
import styled from "styled-components";
import { CenteredHeader, SubText } from './App.js'
import YTPlayer from './YTPlayer.js';

const MainDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 10rem;
  text-align: center;
  margin-bottom:30rem;
  height: 150px;
`;

const image2 =
  "https://images.pexels.com/photos/1647063/pexels-photo-1647063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";


class Home extends Component {
  render() {
    return (
      <div>
        <CenteredHeader>Stay High and Will Holt </CenteredHeader>
        <SubText>Feat. Johnny, BigBukkake, and other guests </SubText>

        <hr/>
        <MainDiv>
        <YTPlayer/>
        </MainDiv>
        <hr/>
        
       
      </div>
    );
  }
}

export default Home;
