var AnarchoApp = require('./components/AnarchoApp.react');
var React = require('react');
window.React = React; // export for http://fb.me/react-devtools

React.render(
    <AnarchoApp />,
    document.getElementById('react')
);