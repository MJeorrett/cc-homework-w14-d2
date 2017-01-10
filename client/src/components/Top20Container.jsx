var React = require('react');

var Top20Container = React.createClass({

  getInitialState: function() {
    return {
      data: ""
    }
  },

  componentDidMount: function() {
    var request = new XMLHttpRequest();
    request.open( 'GET', this.props.dataUrl );
    request.onload = function() {
      this.setState({
        data: JSON.parse( request.responseText )
      });
    }.bind( this );
    request.send( null );
  },

  render: function() {
    return (
      <div>
        <h1>Top 20</h1>
        { this.state.data.toString() }
      </div>
    )
  }

});

module.exports = Top20Container;
