var React = require('react');

var Top20Entry = require('./Top20Entry');

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
          />
        }
      );

      return (
        <div>
          <h1>Top 20</h1>
          { entryElements }
        </div>
      )
    } else {
      return <p>Loading...</p>
    }
  }

});

module.exports = Top20Container;
