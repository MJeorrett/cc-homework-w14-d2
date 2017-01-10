var React = require('react');
var ReactDOM = require('react-dom');

var Top20Container = require('./components/Top20Container');

window.onload = function(){
  ReactDOM.render(
    <Top20Container dataUrl="https://itunes.apple.com/gb/rss/topsongs/limit=20/json" />,
    document.getElementById('app')
  );
}
