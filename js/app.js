var AnarchoApp = require('./components/AnarchoApp.react');
var React = require('react');
var ReactDOM = require('react-dom');
window.React = React; // export for http://fb.me/react-devtools

ReactDOM.render(
    <AnarchoApp />,
    document.getElementById('react')
);