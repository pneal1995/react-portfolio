import React, { Component } from 'react';
import YouTube from 'react-youtube';
 
class YTPlayer extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        listType:'playlist',
            list: 'PL5yYUqnfF1eW49nQLML08lRNQtIgvNEFI'
      }
    };
 
    return (
      <YouTube

        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YTPlayer