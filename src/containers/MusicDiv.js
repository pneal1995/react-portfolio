import React, { Component } from 'react';
import MusicPlayer from 'react-responsive-music-player'

const playlist = [
    {
      url: '',
      cover: 'path/to/jpg',
      title: 'Girl',
      artist: [
        'Yeezy'
      ]
    },
     {
      url: '',
      cover: 'path/to/jpg',
      title: 'Money',
      artist: [
        'Kanye West'
      ]
    }
  ]

class MusicDiv extends Component {

  render() {
    return (
      <div>
      <MusicPlayer playlist={playlist} />
      </div>
    );
  }
}

export default MusicDiv;
