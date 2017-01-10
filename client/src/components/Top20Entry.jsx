var React = require('react');

var Top20Entry = React.createClass({

  handleClick: function() {
    var trackUrl = this.props.entryData.link[1].attributes.href;
    this.props.updatePlayingTrack( trackUrl );
  },

  render: function() {
    return (
      <img
        className="Top20Image"
        src={ this.props.entryData["im:image"][2].label }
        onClick={ this.handleClick }
      />
    )
  }

});

module.exports = Top20Entry;
