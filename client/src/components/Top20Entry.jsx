var React = require('react');

var Top20Entry = React.createClass({

  render: function() {
    return (
      <img
        className="Top20Image"
        src={ this.props.entryData["im:image"][2].label }
      />
    )
  }

});

module.exports = Top20Entry;
