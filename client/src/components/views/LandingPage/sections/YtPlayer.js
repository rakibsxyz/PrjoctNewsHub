import React from 'react';
import YouTube from 'react-youtube';
 
export default class YtPlayer extends React.Component {

  render() {
    const opts = {
     
     
      playerVars: {
        
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        'origin':'http://localhost:3000'
      },
    };
 
    return <YouTube  className = "ytplayer" videoId={this.props.videoId} opts={opts} onReady={this._onReady} /> ;
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

// https://www.npmjs.com/package/react-youtube