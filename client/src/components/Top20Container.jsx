var React = require('react');

var Top20Entry = require('./Top20Entry');

var Top20Container = React.createClass({

  getInitialState: function() {
    return {
      data: "",
      playingTrackUrl: ""
    }
  },

  setPlayingTrack: function( playingTrackUrl ) {
    var newSrc = playingTrackUrl;
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
        var audioElement = document.getElementsByTagName( "audio" )[0];
        audioElement.pause();
        audioElement.load();
        audioElement.play();
      }
    );
  },

  componentDidMount: function() {
    var request = new XMLHttpRequest();
    request.open( 'GET', this.props.dataUrl );
    request.onload = function() {
      var dataObject = JSON.parse( request.responseText );
      this.setState(
        {
          data: dataObject
        },
        function() {
          console.log( "received data: ", dataObject );
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
            imageUrl={ entryData["im:image"][2].label }
            trackUrl={ entryData.link[1].attributes.href }
            updatePlayingTrack={ this.setPlayingTrack }
            playingTrackUrl={ this.state.playingTrackUrl }
          />
        }.bind( this )
      );

      return (
        <div>
          <h1>Top 20</h1>
          { entryElements }
          <audio>
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
