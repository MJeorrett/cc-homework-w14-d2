var React = require('react');

var Top20Entry = require('./Top20Entry');
var ReactAudioPlayer = require('react-audio-player');

var Top20Container = React.createClass({

  getInitialState: function() {
    return {
      data: "",
      playingTrackUrl: ""
    }
  },

  setPlayingTrack: function( playingTrackUrl ) {
    var newSrc = playingTrackUrl
    if ( playingTrackUrl === this.state.playingTrackUrl ) {
      newSrc = ""
    }
    this.setState(
      function () {
        return {
          playingTrackUrl: newSrc
        }
      },
      function() {
        document.getElementsByTagName( "audio" )[0].load();
        document.getElementsByTagName( "audio" )[0].play();
      }
    );
  },

  componentDidMount: function() {
    var request = new XMLHttpRequest();
    request.open( 'GET', this.props.dataUrl );
    request.onload = function() {
      this.setState(
        {
          data: JSON.parse( request.responseText )
        },
        function() {
          console.log( JSON.parse( request.responseText ) );
        }
      );
    }.bind( this );
    request.send( null );
  },

  render: function() {

    if ( this.state.data ) {
      var entryElements = this.state.data.feed.entry.map(
        function( entryData, index ) {
          return <Top20Entry
            key={ index }
            entryData={ entryData }
            updatePlayingTrack={ this.setPlayingTrack }
          />
        }.bind( this )
      );

      return (
        <div>
          <h1>Top 20</h1>
          <p>Playing Track URL: { this.state.playingTrackUrl }</p>
          { entryElements }
          <audio controls>
            <source
              src={ this.state.playingTrackUrl }
              type="audio/mpeg"
            />
          </audio>
        </div>
      )
    } else {
      return <p>Loading...</p>
    }
  }

});

module.exports = Top20Container;
