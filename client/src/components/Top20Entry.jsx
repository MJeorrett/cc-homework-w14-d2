var React = require('react');

var Top20Entry = React.createClass({

  render: function() {
    return <img src={ this.props.entryData["im:image"][2].label } />
  }

});

module.exports = Top20Entry;
