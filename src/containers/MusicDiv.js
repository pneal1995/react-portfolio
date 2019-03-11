import React, { Component } from 'react';
import MusicPlayer from 'react-responsive-music-player'
import { Parallax } from "react-parallax";
import { CenteredHeader } from './App.js';
import styled from 'styled-components';

const image =
  "https://images.pexels.com/photos/6966/abstract-music-rock-bw.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  const PortTitle = styled.h3`
  flex: 1;
  font-family: Gotham, Helvetica, Arial, sans-serif;


  @media (max-width: 600px) {
    text-align: center;
  }
`;

const playlist = [
    {
      url: 'path/to/mp3',
      cover: 'path/to/jpg',
      title: 'Girl',
      artist: [
        'Five Track Mind'
      ]
    },
     {
      url: 'path/to/mp3',
      cover: 'path/to/jpg',
      title: 'Everlasting',
      artist: [
        'Five Track Mind'
      ]
    }
  ]

class MusicDiv extends Component {

  render() {
    return (
      <div>
        <CenteredHeader><PortTitle>My Band's Recent Music</PortTitle></CenteredHeader>
        
         <Parallax
      bgImage={image}
      strength={100} >
      <div style={{ height: 300 }}>
      {/* <div style={{padding: 80}}> */}
      <MusicPlayer playlist={playlist} />
      {/* </div> */}
      
      </div>
    </Parallax>
    
        
      </div>
    );
  }
}

export default MusicDiv;
