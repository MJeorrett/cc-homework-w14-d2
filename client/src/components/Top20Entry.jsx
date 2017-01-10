var React = require('react');

var Top20Entry = React.createClass({

  getInitialState: function() {
    return {
      selected: false
    }
  },

  handleClick: function() {
    var trackUrl = this.props.entryData.link[1].attributes.href;
    this.props.updatePlayingTrack( trackUrl );
    var newSelected = !this.state.selected;
    this.setState({
      selected: newSelected
    });
  },

  render: function() {

    var entryData = this.props.entryData;
    var trackUrl = this.props.entryData.link[1].attributes.href;
    var selectedClass = this.props.playingTrackUrl === trackUrl ? " image-selected" : ""
    var fullClassName = "top-20-image" + selectedClass;

    return (
      <img
        className={ fullClassName }
        src={ entryData["im:image"][2].label }
        onClick={ this.handleClick }
      />
    )
  }

});

module.exports = Top20Entry;
