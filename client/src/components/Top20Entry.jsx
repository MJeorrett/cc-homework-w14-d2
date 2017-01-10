var React = require('react');

var Top20Entry = React.createClass({

  getInitialState: function() {
    return {
      selected: false
    }
  },

  handleClick: function() {
    var trackUrl = this.props.trackUrl;
    this.props.updatePlayingTrack( trackUrl );
    var newSelected = !this.state.selected;
    this.setState({
      selected: newSelected
    });
  },

  render: function() {

    var entryData = this.props.entryData;
    var selected = this.props.playingTrackUrl === this.props.trackUrl;
    var selectedClass =  selected ? " image-selected" : ""
    var fullClassName = "top-20-image" + selectedClass;

    return (
      <img
        className={ fullClassName }
        src={ this.props.imageUrl }
        onClick={ this.handleClick }
      />
    )
  }

});

module.exports = Top20Entry;
